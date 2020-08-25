---
title: My Dream Programming Language
---

I've always been fascinated by programming languages. \
Every programming language brings its own syntax, semantic and paradigm. \

If you have to choose how to implement your own programming language, how would you do it? \
Here's my idea of **Inferi**, a **FLIP** (**F**unctional **L**ight **I**mperative **P**rogramming) programming language.

# Index
- [Types and Syntax](#types-and-syntax)
- [Built-in data structures](#built-in-data-structures)
- [Functions! Functions! Functions!](#functions-functions-functions)
- [Impure functions](#impure-functions)
- [Failure handling](#failure-handling)
- [Example program](#example-program)
- [Project Status](#project-status)

# Types and Syntax

**Inferi** is a statically typed programming language. It uses the **Hindley Milner** type system for type signatures.
Let's define a simple `add` function, which adds two numbers:

```haskell
@spec add : Int -> Int -> Int
add (x y) ->
  x + y
```

Parentheses are completely optional, so developers coming from **C-Like** languages will find it easier to get started with this language:

```haskell
@spec add : Int -> Int -> Int
add (x y) -> {
  x + y
}
```

Also, type annotations are completely optional, and can be inferred at compile time (REPL example):

```bash
> let add x y -> x + y
> "add : Int -> Int -> Int"
```

**Inferi** gives you access to type classes, so that you could refactor the `add` type signature as follows (just like in Haskell):

```haskell
@spec add Num a => a -> a -> a
add (x y) -> {
  x + y
}
```

Functions will always be automatically curried, so that (for instance) the `add` function can take advantage of partial application:

```haskell
@spec add : Int -> Int -> Int
add (x y) -> {
  x + y
}

@spec add5 -> Int -> Int
add5 -> add 5

main -> {
  print add5(10)  -- 15
  print add(10 5) -- 15
}
```

Every **Inferi** program needs a `main` function, which will be the entry point of the program itself:

```haskell
main -> println "Hello, World!"
```

# Built-in data structures
**Inferi** comes with a useful collection of built-in data structures such as:

**Maps**
```haskell
data MapExample = {
  firstName : String,
  lastName  : String,
  nickname  : String
}

@spec mapExample -> Map(MapExample)
mapExample -> {
  %{
    firstName: "Michele",
    lastName:  "Riva",
    nickname:  "Mitch"
  }
}
```

**Lists**
```haskell
@spec listExample -> [Int]
listExample -> [10, 50, 20, 1010, 20391, 2039484]
```

**Tuples**
```haskell
@spec tupleExample -> {String, Float, Bool}
tupleExample -> {"I am a string", -30.02, true}
```

# Functions! Functions! Functions!

**Inferi** takes a lot from both **Haskell** and **Elixir**.

You can pattern match against multiple values by creating different functions, just like in Haskell (incredibly stupid example):

```haskell
@spec greet : String -> String
greet ("Mitch") -> "Hello, Mitch!"
greet ("Jona")  -> "Hello, Jona!"
greet (_)       -> "Hello, stranger!"
```

of course you can bind the passed argument to a variable:

```haskell
@spec greet : String -> String
greet ("Mitch") -> "Hello, Mitch!"
greet ("Jona")  -> "Hello, Jona!"
greet (name)    -> "Hello, ${name}!"
```

You can compose functions by using the **pipeline** operator:

```haskell
@spec scream : String -> String
scream (str) -> {
  str
    |> upcase
    |> (\x -> "${x}!!!") -- Lambda function, just like in Haskell
}
```

or currying just Like in Haskell:

```haskell
@spec scream : String -> String
scream (str) -> str · upcase · (\x -> "${x}!!!")
```

Also, lambda functions supports the Elixir **capture operator** for lambda functions:

```haskell
@spec scream : String -> String
scream (str) -> str · upcase · (& "${&1}!!!")
--                              ^     ^ Here we say that we want to use the first argument of our lambda function
--                              ^ Here we say that this is a lambda functions                  
```

# Impure functions
Unlike Haskell, **Inferi** is not a purely functional programming language, and it allows us to write some functions that supports impure computations.

**Impure function**:

```haskell
import http (call) -- import the "call" function from the "http" library
import list (push)

data RESTPeople = {
  name : String `json:"name"` -- a little bit of Golang
  age  : Int    `json:"age"`
}

@spec callRestAPI : Either(Error [String])
callRestAPI? -> {
  let mut people : [String]
  let mut callResult : [RESTPeople]

  &callResult <- await call("https://my-rest-api.com/get-people")

  for person in callResult -> {
    { name, age } = person
    if age >= 18 {
      push(people, name)
    }
  }

  return people
}
```

We import the `call` function from the `http` library and `push` from the `list` library \
We define a `type` (in that case, really similar to **Golang structs**) declaring which value needs to be decoded from the JSON response of our REST API.

After that, we define a function called `callRestAPI` which returns an Either monad (functions with `mut` keywords or other impure computations **must** return a monad, see **Failure handling** paragraph).

We declare a **mutable** `people` variable, which is a list of strings. \
We declare our **mutable** `callResult` variable, which will contain the REST response. \

We can finally call our REST API, and we put the result of that call inside the `callResult` variable. \
After that, we loop over the result (which is a list of `RESTPeople`) and we update the previously created list `people` by using the `push` function.

As last statement of our function, we need to use the `return` keywords, which wraps the result into the Either monad. \
If any error occurs, it will wrap the error inside the `Left` result, otherwise it will fill the `Right` result of the monad.

**Pure counterpart**:

```haskell
import http (call?)

data RESTPeople = {
  name : String `json:"name"`
  age  : Int    `json:"age"`
}

@spec callRestAPI : Either(Error [String])
callRestAPI? -> {
  return $
    (await call?("https://my-rest-api.com/get-people") : [RESTPeople])
      |> filter(& &1.age >= 18 )
      |> map(& drop(&1, "age"))
}
```

You can also write the exact same function in a more pure manner by using the pipeline operator. \
The `$` operator is used after `return` for replacing round brackets, just like in Haskell.

# Failure handling

Functions could always fail. That's why **Inferi** wants to provide three different ways for handling and avoiding runtime errors as follows:

**1) Pattern matching**: \
You can just pattern match over one or more arguments of your functions and avoid or throw errors as you prefer:

```haskell
@spec divide : Num a => a -> a -> a
divide (x y) -> x / y
divide (x 0) -> error "You can't divide by 0"

main -> {
  divide (10 5) -- 2
  divide (10 0) -- Runtime error: You can't divide by 0
}
```

**2) Monadic failure handling**: \
You can add `?` after the function name so that it will encapsulate the function output into an `Either` monad:

```haskell
@spec divide : Either (Num a => a -> a -> a)
divide? (x y) -> x / y

main -> {
  divide?(10 5) -- Right (10)
  divide?(10 0) -- Left (Error{reason: "Division by 0", args: {10, 5}})
}
```

If a runtime error occurs, **Inferi** will let you know by returning a struct containing the reason of the error and the passed arguments (incredibly useful for debug).

You can also implement the **monadic failure handling** yourself:

```haskell
@spec divide : Either (Num a => a -> a -> a)
divide? (x y) -> {
  try {
    result = x / y
    Right(result)
  } catch error -> {
    println (error) -- you can debug the error, send it to Sentry,
                    -- do whatever you want
    Left(Error{reason: "You can't divide by 0!"}) -- The arguments will 
                                                  -- automatically be attached runtime
  }
}
```

**3) Using Status Tuples:** \
Just like in Elixir/Erlang, you can just return some tuples representing your computation result. This won't prevent runtime errors, but it's a best practice for defining different kind of functions:

```haskell
@spec divide! : Num a => a -> a -> Status(a)
--          ^ it is best practice to set `!` after the function name for telling
--            that you're returning a Status tuple

divide! (x y) (when y == 0) -> {:error, 0, "Division by 0"}
--           ^ Please note this Erlang-style guards

divide! (x y) -> {
  result = x / y
  {:ok, result, ""}
}

main -> {
  print divide(10 5) -- {:ok, 2, ""}
  print divide(10 0) -- {:error, 0, "Division by 0"}
}
```

Status is a **private** type that represents either `:ok` or `:error` atoms (taken from Elixir/Erlang atoms):

```haskell
type Status a   -> {Atom, a, String}
type Status a b -> {Atom, a, b}
```

as you can see in the above definition, we can pass arguments to our types. \
That means that we can define different `Status` types depending on the function we're writing.

As an example, this will fail:
```haskell
@spec divideFloat! : Float -> Float -> Status(Float)
divideFloat! (x y) (when y == 0.0) -> {:error, 0, "Division by 0"}

-- The 0 passed to the Status tuple is of Int type, but the Status Tuple
-- wants a Float (so, 0.0)!
```

But this will work:
```haskell
@spec divideFloat! : Float -> Float -> Status(Float)
divideFloat! (x y) (when y == 0.0) -> {:error, 0.0, "Division by 0"}
```

As you can see in the `Status` definition, we can also customize the third tuple element by explicitly passing its type:

```haskell
@spec doSomethingCool : String -> String -> Status(String Maybe(Error))
doSomethingCool (str1 str2) -> {
  returningString       = "${str1} ${str2}"
  {:ok, returningString, Nothing}
}

main -> {
  print doSomethingCool ("Michele" "Riva") -- {:ok, "Michele Riva", Nothing}
}
```

# Example program

Let's write a very simple webserver using just the **Inferi** standard library:

```haskell
import webserver
import system (env)

{--
  Here we get the port number that we want to expose
  from our webserver.
--}

@spec port : Int
port -> {
  case env("PORT") -> {
    | Just(env_port) -> read env_port -- automatic unwrap, is this OCaml?
    | Nothing        -> 8000 
  }
}

{--
  We then specify a list of tuples which represents
  our webserver routes.
--}

@spec routes : [webserver.Route]
routes -> {
  [
    {"/",            indexController}
  , {"/about",       aboutController}
  , {"/greet/:name", greetController}
  ]
}

{-- Here we write down some controllers --}

@spec indexController : [webserver.Req] -> [webserver.Res]
indexController (_ res) -> {
  res.json(%{        -- hey! Is this Express.js?
    success: true
  })
}

@spec aboutController : [webserver.Req] -> [webserver.Res]
aboutController (_ res) -> {
  res.render("about.html") -- oh Express.js, here we meet again
}

@spec greetController : [webserver.Req] -> [webserver.Res]
greetController (req res) -> {
  %{ name } = Req.path -- destructure the request path and get the "name" variable

  case name -> {
    | ""   -> res.json(%{success: false, message: "Who should I greet?"})
    | name -> res.json(%{success: true, message: "Hello, ${name}!"})
  }
}

{-- our main function --}

main -> {
  webserver.start(%{
    routes -- Hey is this JavaScript? 
  , port
  })
}
```

# Project Status
The whole **Inferi** project is just an idea. \
No compilers, no specifications, just this article.

Now you may be wondering: "**Inferi** is really similar to Haskell, Rust, Elixir, OCaml, why are you writing this?".

Well, I believe that the future of software development is **functional**. \
But even then, purely functional programming will be pretty hard for many people, and we need a language that can be both imperative and functional, taking the best from both worlds. \
For that reason, I think that future programming languages will be **FLIP** (**F**unctional **L**ight **I**mperative **P**rogramming), and **Inferi** could be my future effort for building such language.