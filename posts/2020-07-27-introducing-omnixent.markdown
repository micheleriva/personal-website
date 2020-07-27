---
title: Introducing Omnixent (OSS Project)
---

**Omnixent** is probably going to be my biggest **Open Source** project ever.\
While working on a side project, I wanted to find a way to understand what people is searching on the net, in order to answer their questions writing high quality articles.

So here it comes the idea of **Omnixent**.

## WTF is Omnixent

Omnixent is basically a simple API which allows you to spy what people searches on the net. Let's say that we're writing an article about **apple pies**, and we want us to be easily found on **Google**.

We can just ask "Hey **Omnixent**, what does people search on Google about **apple pies**?" \
It will soon answer us with a nice JSON output that looks like this:

```json
[
  {
    "term": "apple pie",
    "result": ["apple pie", "apple pie recipe", "apple pie crust",
      "apple pie filling", "american apple pie", "apple pie without butter",
      "apple pie milano", "apple pie travis scott", "apple pie crumble",
      "apple pie bimby"
    ]
  },
  {
    "term": "what apple pie",
    "result": ["what's apple pie app", "what's apple pie spice",
      "what's apple pie", "what's apple pie bed", "how apple pie drink",
      "what is apple pie a la mode", "what is apple pie moonshine",
      "what's in apple pie spice mix", "what is apple pie filling",
      "what temperature apple pie"
    ]
  },
  {
    "term": "why apple pie",
    "result": ["why apple pie is the best", "why apple pie watery",
      "why apple pie is american", "why apple pie and cheddar cheese",
      "why apple pie with cheese", "why apple pie bed",
      "why my apple pie is watery", "why was apple pie invented",
      "why mock apple pie", "why is apple pie healthy"]
  },
  ...
]
```

So it basically looks for a fixed amount of information about **apple pies** on Google and looks for the **most searched sentences**. \
It supports multiple languages, and the english version currently looks for the following **search terms** (where `@` stands for the original term you want to look for):

```txt
what @    why @     when @    where @
how @     is @      who @     can @
does @    doesn't @ with @    without @
for @     to @      from @    which @
why @

@ what    @ when  @ where   @ how
@ is      @ who   @ can     @ does
@ doesn't @ with  @ without @ for
@ to      @ from

@ vs      @ versus
@ like    @ and
@ or

@ a @ b @ c @ d
@ e @ f @ g @ h
@ i @ j @ k @ l
@ m @ n @ o @ p
@ q @ r @ s @ t 
@ u @ v @ w @ x
@ y @ z
```

Oh wait, I was forgetting about the fact that I'm also planning to support the following social networks/marketplaces/search engines:

- Google
- YouTube
- Twitter
- Facebook
- Amazon
- Bing
- Yandex
- DuckDuckGo
- Baidu

## Behind the scenes
**Omnixent** is entirely written in **Elixir** and it's a self-contained application.\
It doesn't need any external dependency for storing data, caching and creating REST APIs.

In fact, it takes advantage of the **Erlang OTP** for storing/caching data using the **Mnesia distributed database** and **Cowboy** as a web server for REST/GraphQL APIs.

Once the application is compiled, it can be easily deployed on any server even without the need of using Docker or docker-compose.

Feel free to take a look, steal or sell the code here: [https://github.com/omnixent/omnixent](https://github.com/omnixent/omnixent)

## Future Enhancements

### SDK
At the current state, **Omnixent** only supports **Elixir** and **Erlang** APIs. I'm working hard for writing the SDK for the following languages:

- Node.js (with TypeScript support)
- PHP
- Java
- C#
- Go

and libraries:

- React.js
- Vue.js

Of course, if you want to help feel free to reach out! :D

### User Interface

I'll also want to create a beautiful user interface for non-technical people, so that they'll be able to take advantage of this software without going crazy with REST APIs!

### REST/GraphQL APIs

I'm working hard for developing a REST API which looks like that:

```bash
curl -X GET https://localhost:4000?term=java,language=en&country=us&platform=google

[
  {
    "term": "java",
    "results": ["java", "javascript", "java vs javascript", "java 10 repl", "java jdk"]
  },
  {
    "term": "when java",
    "results": ["when javascript", "when java was developed", "when java 1.8 released"]
  },
  ...
]
```

and a GraphQL API via **Elixir Absinthe** that looks like that:

```javascript
query Search($term: String!, $country: String!, $language: String!) {
  google(where: { _and: { _eq: { term: $term, country: $country, language $language } }}) {
    when,
    where,
  },
  youtube(where: { _and: { _eq: { term: $term, country: $country, language $language } }}) {
    when,
    where,
    versus
  }
}
```

Help wanted! :D

# Supporting the project
There are different ways to support this project. \
I won't ask for money, because I truly believe that **Omnixent** could play a little part in creating a better and higher quality web.

If you really want to support the project, I'd need some help in the following fields:

- **Graphic Design**: The current logo sucks. I made it on Figma in something like 15mins! Also a nice looking website would be great!

- **UI/UX**: I'd like to create a beautiful webapp which allows non-technical people to make some research on **Omnixent**

- **Engineering**: I'd like to roll out new features faster! If you're willing to learn **Elixir**, I'd be glad to work with you on that (in our free time, of course)!

Once again, you can find the source code of the core library here: [https://github.com/omnixent/omnixent](https://github.com/omnixent/omnixent)