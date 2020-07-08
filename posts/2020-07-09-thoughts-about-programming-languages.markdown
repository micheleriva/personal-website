---
title: My thoughts about programming languages
keywords: Haskell, Golang, JavaScript, PHP
prism: true
---

During the last years I had the opportunity to experiment with different programming languages. \
I really like to learn different languages, approaches and paradigms. I'm a really curious person, and programming languages have always fascinated me.

Every language is different, and here I'd like to add some considerations about what I liked and what I hated about five languages that I've worked with.

- [JavaScript](#javascript)
- [Haskell](#haskell)
- [Go](#go)
- [PHP](#php)
- [Elixir](#elixir)

<h1 id="javascript"> JavaScript </h1>

### The good
**Quick prototyping**: JavaScript enables you to write quick and dirty prototypes to validate your ideas. With Node.js you can even build backend proof of concepts in a very small amount of time.

**Flexibility**: with ES6 metaprogramming features (Proxies, Symbols, etc) JavaScript is becoming an incredibly powerful language. \
But even if you don't use those features, it allows you to write some very generic functions and utilize them both on the client, server and even mobile apps (React Native, for instance).

**Community**: the JavaScript community is awesome. Every time you have a problem, there's always someone who asked for that on StackOverflow :D \
Jokes apart, the **npm** registry is an incredible source of useful packages that enables you to write any kind of application using just one language.

**Functional programming**: an someone may know, at the beginning JavaScript had to be "a **Scheme**-like programming language for the browser, but with **Java** syntax". \
Even if today JavaScript is not a pure functional programming language, it preserves some useful FP features such as higher order functions, anonymous functions (using arrow functions in ES6+) and so on.

**Syntax**: the latest versions of JavaScript introduced some syntactic sugars that makes it easy to write more readable code. Object/Array destructuring, arrow functions, spread operator just to name few.

**Asynchronous**: once you get how to handle async code, you'll begin to think async. And you'll like it.

### The bad
**Dynamic typing**: JavaScript's dynamic typing is atrocious. Yes, I know why `10 + "10" === "1010"`, but I just don't like it. Type coercion is something that will likely break your code runtime instead of building/compile time. \
Other compiled languages (such as **ReasonML** or **Haskell**) doesn't actually require type annotation, they can infer types at compile time. But they will throw an error if your trying to make the sum of an integer and a string, and that's just a silly example. \
By the way, both **TypeScript** and **Flow** can fix that.

**General nonsense**: JavaScript nonsense features are often caused by type coercion. \
`[] + {} === [object object]` but `{} + [] === 0`. \
`typeof NaN === "number"`, but `NaN` actually means "**N**ot **a** **N**umber". \
If you're a JavaScript programmer, you know what I mean with **general nonsense**.

**Tail call optimization**: even if **EcmaScript** specifies **TCO** for recursive functions, it seems to be only supported by [webkit](https://webkit.org/blog/4054/es6-in-webkit).

**Object/Array constants are mutable**: just like **Java**'s `final`, you can modify both objects and arrays after their initialization, even if they are constants.

<h1 id="haskell"> Haskell </h1>

### The good
**It changes your mind**: after getting in touch with Haskell, you'll begin to think at code in a completely different way.

**Performances**: Haskell is a compiled language and thanks to its purely functional nature, the compiler can adopt a lot of optimizations at compile time.

**Type system**: the Hindley–Milner type system is awesome. Type declarations are incredibly clear and easy to understand. Also, the **Haskell** type system can infer types and check for bugs during compile time.

**Syntax**: once you get used to, Haskell code is a pleasure to read.

**Classes**: really similar to **Java**'s interfaces, but more powerful thanks to their hierarchic design.

**Well designed**: Haskell doesn't show typical design errors (such as JavaScript ones) and prefers software correctness over "having X feature at all costs" (read more about that in the [php](#php) section)

**Pattern matching**: self-explanatory. Haskell pattern matching is both fun and powerful:

```haskell
sayMe :: (Integral a) => a -> String
sayMe 1 = "One!"
sayMe 2 = "Two!"
sayMe 3 = "Three!"
sayMe 4 = "Four!"
sayMe 5 = "Five!"
sayMe x = "Not between 1 and 5"
```
(learn more [here](http://learnyouahaskell.com/syntax-in-functions))

**Lazy evaluation**: functions won't be evaluated until strictly needed.

### The bad
**It makes you feel stupid**: Haskell is an incredibly powerful language, but sometimes it seems that you won't be able to do anything with it without a PhD in Category Theory. The learning curve is really steep.

**Lack of valid resources**: learning Haskell is really really hard. I have read 5 different books and took 3 online courses, but after some time it begins to loose sense. Finding a mentor is hard.

**Monads**: basically just monoids in the category of endofunctors. Clear, isn't it? By the way the problem isn't with monads: but the difficulty to understand wtf they are.

**Jargon**: forget everything you know about programming jargon. In Haskell you'll spend more time talking about **monads**, **monoids**, **functors**, **applicative** than lists, integers, loops and other common programming keywords. It feels like to learn programming from scratch.

<h1 id="go"> Go </h1>

### The good
**Easy to learn**: I've built my first Go webserver in like an hour. C-like syntax makes it really easy to get started with this language when coming from JavaScript, PHP, Java, C.

**Outstanding performances**: even without caring a lot about how you write your code, you can end up with some decent performances.

**Concurrency made easy**: it is really easy to get started with goroutines and make your code concurrent.

**Incredible ecosystem**: the Go ecosystem is huge and full of high quality packages.

**Go modules**: with the introduction of go modules, most of the time you can finally forget the `$GOPATH`. They also makes it easier to manage your application dependencies.

### The bad
**No generics**: Go doesn't support generic typing, which makes it difficult to build reusable functions such as `filter`, `sort` and so on.

**No arrow functions**: while it's technically possible to write an anonymous function in Go, I miss the arrow function form.

**No ternary operator**: seems not important, but this:

```go
myVar := 10 > 5 ? "foo" : "bar"
```

is way better than this:

```go
var myVar string

if 10 > 5 {
  myVar = "foo"
} else {
  myVar = "bar"
}
```

**Error handling**: after some time coding in Go, the error handling still seems a bit strange to me:

```go
val, err := someFunc("foo")
if err != nil {
  handleError(err)
}
```

<h1 id="php"> PHP </h1>

## The good
**Easy language to start with**: PHP has been my first programming language and I have built a lot of things thanks to it.

**Easy to deploy**: with Node.js, Ruby, Python, Elixir, you have to setup an application server in order to make your website available on the internet. **PHP** makes it incredibly easier just by using **Apache** or **NGINX**.

**Rich ecosystem**: just like JavaScript, a lot of developers have built incredible things out of this language.

**Quick prototyping**: just like Node.js, it allows us to build an MVP or a POC in just few hours.

**It just works**: PHP sometimes feels like the spiritual ancestor of Node.js. You can write some code in it, and it just works without any major problem. The same wouldn't apply in OCaml, Haskell, Elm and other strongly typed languages, where you actually spend more time thinking about how to write the code, than actually writing it.

## The bad
**.htaccess**: I still can't find a single reason why I should use this file. Write a typo once, fuck up your website forever thanks to the browser cache.

**Module system**: PHP itself doesn't have a proper module system. You just need to `include()` (read: copy and paste) entire files into another PHP source file. \
You can avoid that by using PHP's OOP features, but this will force you to adopt OOP approach. \
Also, all regular functions are accessible from global scope (if you're not using namespaces).

**Bad design**: there are a number of design errors in the language itself, such as: \

  - `trigger_error` can't be handled using `try/catch`.
  - doesn't support dynamic scope.
  - static variables inside instance methods are not instance-scoped. That means that once you set a variable, it is set as global variable for all the instances.
  - integer byte sizes are different depending on the operating system.
  - and so on...

**JavaScript-style nonsense**: just like JavaScript, the language have some serious nonsense:

  - `"foobar" == 0` is `true`, `"foobar" == true` is `true`, but `0 == true` is `false`
  - The following code breaks the ternary operator:
  ```php
      <?php 
        $initial = 'M';
        $name = (
            ($initial == 'M') ? 'Mitch'
          : ($initial == 'K') ? 'Kevin'
          : ($initial == 'J') ? 'John'
          : ($initial == 'A') ? 'Andrew'
          : 'unknown');
        echo $name; // Andrew
      ?>
  ```

**Doesn't support unicode**: the PHP committee is still discussing about supporting unicode natively. PHP 7 just introduces the [unicode escape syntax](https://wiki.php.net/rfc/unicode_escape) 

**Syntax**: I find procedural PHP hard to read. OOP PHP makes a bit more sense, maybe because it's more organized. Have you tried reading the WordPress source code?

**Bad features?** Rasmus Lerdorf once said "_We’d rather have an ugly feature than not having a feature at all_" ([source](https://www.youtube.com/watch?v=YIGRXEzjE6c))... well, I do disagree. \
I mean, you can say that if you're building a blog, an MVP or other stuff, not a whole programming language. \
Software correctness > community-wanted-features.

<h1 id="elixir"> Elixir </h1>

## The good
**OTP**: the Open Telecom Platform has everything you need in order to create massively scalable soft realtime and distributed systems.

**Performances**: Elixir performances are outstanding. When compared to Java, a single function may be a bit slower. But once you try to parallelize and scale horizontally, Elixir performances will easily overcome Java.

**Metaprogramming**: Elixir metaprogramming features are outstanding.

**Syntax**: its Ruby-like syntax is a pleasure to read and write.

## The bad
**Dynamic typing**: Elixir is a dynamic typed language. That means that you're missing the strong typing advantages that you can find using Haskell. \
Given that Erlang engineers are really smart people, they've build [Dyalizer](http://erlang.org/doc/apps/dialyzer/dialyzer_chapter.html), which is "_static analysis tool that identifies software discrepancies, such as definite type errors, code that has become dead or unreachable because of programming error, and unnecessary tests, in single Erlang modules or entire (sets of) applications_". \
It is a native module of the Erlang VM, so you don't need to install any third party library for that.

**Magic**: Elixir metaprogramming capabilities sometimes can hide the way a program work behind a macro.

**Parenthesis**: they are optional, but Elixir requires them most of the time. I prefer the Haskell way of handling parenthesis.
