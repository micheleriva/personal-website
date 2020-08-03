---
title: Reviewing the worst piece of code ever
---

There's an italian Facebook page called "**Il Programmatore di Merda**" (which can be translated to "**The Shitty Programmer**"). I love that page.

They often share shitty pieces of code and memes about programming, but today I've seen something quite incredible:

![Il merdone della settimana (_weekly very big shit_)](/images/2020-07-31/shittycode.jpg)

There are so many wrong things in here that I don't know where to start. \
If you're a junior developer, this post will help you to understand some very bad errors written in the code above.

# 28 Lines of ~~Errors~~ Code
Let's write down the above code, so that we can discuss about it:

```html
<script>
function authenticateUser(username, password) {
  var accounts = apiService.sql(
    "SELECT * FROM users"
  );

  for (var i = 0; i < accounts.length; i++) {
    var account = accounts [i];
    if (account.username === username &&
        account.password === password)
    {
      return true;
    }
  }
  if ("true" === "true") {
    return false;
  }
}

$('#login').click(function() {
  var username = $("#username").val();
  var password = $("#password").val();

  var authenticated = authenticateUser(username, password);

  if (authenticated === true) {
    $.cookie('loggedin', 'yes', { expires: 1 });
  } else if (authenticated === false) {
    $("error_message").show(LogInFailed);
  }
});
</script>
```

Ok, I don't really know where to start. \
Let's divide the errors above in 3 categories:

- [Security issues](#security-issues)
- [Basic programming knowledge](#basic-programming-knowledge)
- [Code formatting](#code-formatting)

<h2 id="security-issues">Security issues</h2>
We are pretty sure that the following code is running on the client side, 'cause it's wrapped between two `<script>` tags (also, is using jQuery). \
Don't get me wrong, it would have been terrible even on the server side, but running that code on the client exposes your database to... everyone.

Let's take a look at the `authenticateUser` function:

```javascript
function authenticateUser(username, password) {
  var accounts = apiService.sql(
    "SELECT * FROM users"
  );

  for (var i = 0; i < accounts.length; i++) {
    var account = accounts [i];
    if (account.username === username &&
        account.password === password)
    {
      return true;
    }
  }
  if ("true" === "true") {
    return false;
  }
}
```

We have a function somewhere called `apiServices` which exposes a `.sql` method, where you can run SQL queries against the database. \
That means that if you open the console on the web page that is hosting the above code, you'll be able to spawn every kind of query. \

You could do something like that:

```javascript
apiService.sql("show tables;");
```

and it will return the complete list of their database tables by using their own APIs.\
But hey, ok, let's pretend that this is not a real problem. But take a look at that:

```javascript
if (account.username === username &&
    account.password === password)
```

so you're telling me that you're saving all the passwords without hashing them? \
Great move! Now I can attach a debugger to the Chrome console and see every user's password. \
I'm also pretty sure that an high percentage of users uses the same username/password tuple for social networks, email services, bank accounts and so on.

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/RyXVu4ZW454IM" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

There's also a problem on how they're trying to setup the `loggedin` cookie:

```js
$.cookie('loggedin', 'yes', { expires: 1 });
```

So they're basically using jQuery for setting a cookie which tells to the web application if a user is authenticated or not. \

Well, **NEVER SET THIS KIND OF COOKIES USING JAVASCRIPT**.

If you need to store that kind of information, cookies are the most common choice, and that's ok! But setting them using JavaScript means that you cannot set the `httpOnly` attribute, so every single malevolent script will gain access to your cookies.

Yes, I know, they're just storing a key value like `'loggedin': 'yes'`, so that's not the case, but that's a very bad practice.

Also, opening my Chrome console I could always type `$.cookie('loggedin', 'yes', { expires: 1000000000000 });` and I will stay loggedin forever without even have an account.

<h2 id="basic-programming-knowledge">Basic programming knowledge</h2>
There are so many things to say and so little time. \
Obviously the `authenticateUser` function is pure garbage, and it shows some lacks of basic programming knowledge.\ 

```javascript
function authenticateUser(username, password) {
  var accounts = apiService.sql(
    "SELECT * FROM users"
  );

  for (var i = 0; i < accounts.length; i++) {
    var account = accounts [i];
    if (account.username === username &&
        account.password === password)
    {
      return true;
    }
  }
  if ("true" === "true") {
    return false;
  }
}
```

Instead of selecting every single user inside of the database, why doesn't he/she select just the user with a given username and a given password? \
What if he/she had millions of users in that database? \

I've said before and I'll say it again, **why they're not hashing passwords inside of their database?**

Let's move on to the returning value of `authenticateUser`. \
For what I see, it takes two arguments of type `string` and returns a single `boolean` value. \

So, the following piece of code, even being awful, makes a bit of sense:

```js
for (var i = 0; i < accounts.length; i++) {
  var account = accounts [i];
  if (account.username === username &&
      account.password === password)
  {
    return true;
  }
}
```

"does an user with _**X**_ username and _**Y**_ password exists? Yes, so I'll return `true`". \
But this:

```javascript
if ("true" === "true") {
  return false;
}
```

This doesn't make sense at all. \
Why doesn't this function return `false` without this always-true conditional?

Now let's analyze the following code:

```javascript
$('#login').click(function() {
  var username = $("#username").val();
  var password = $("#password").val();

  var authenticated = authenticateUser(username, password);

  if (authenticated === true) {
    $.cookie('loggedin', 'yes', { expires: 1 });
  } else if (authenticated === false) {
    $("error_message").show(LogInFailed);
  }
});
```

The part where it's taking the values using jQuery is ok. \
The problem is how it's handling the `loggedin` cookie. \

We've previously talked about the fact that I could just open my Chrome console and type `$.cookie('loggedin', 'yes', { expires: 1 });` in order to stay authenticated for one day without even the need for an account. \

So, how the heck does this web page know who I am? \
Maybe it's just showing some private content under username/password authentication, so it's not showing any personal data. No one will ever know.

<h2 id="code-formatting"> Code Formatting </h2>
Probably the less critical part of the whole code, but we can clearly see that this developer have copied/pasted some code taken from some website.

Here we can see the use of the double quotes for writing strings:

```javascript
var username = $("#username").val();
var password = $("#password").val();
```

Here we can see single quotes:

```javascript
$.cookie('loggedin', 'yes', { expires: 1 });
```

This may not look important, but it's actually telling us that the developer has probably copied some code from StackOverflow without even rewriting it following a common style guide for the whole codebase. \
Of course this is a minor issue, but it show that the developer doesn't really care about understanding how the code is working, it just want it to work in some way.

Don't get me wrong, I do search things on Google daily, but it is more important to understand (for instance) how to set a cookie, than copy and paste something just to make it work. \
What if for some reason the whole process breaks? How do you know which part of your script is not working?

## Conclusion

I'm absolutely sure that the code above is fake. \
That's the first time that I see a synchronous SQL query:

```javascript
var accounts = apiService.sql(
  "SELECT * FROM users"
);
```

Normally, I'd expect something like that:

```javascript
var accounts = apiService.sql("SELECT * FROM users", (err, res) => {
  console.log(err); // some error
  console.log(res); // query result
});
```

or like that:

```javascript
var accounts = await apiService.sql(
  "SELECT * FROM users"
);
```

Even if `apiService.sql` returns a value synchronously (which I doubt), internally it have to open a connection to a database, make a query and send back the response, which (as you may have guessed) can't be synchronous. \

But even if the code above was not a fake, I'm sure that it has been written by a junior dev. \
During my first weeks as a developer, I'm pretty sure I wrote such bad code for my old company (sorry :D). \

**It's not a junior developer fault**. \
Let's pretend that the above code is real. The junior developer here is making its best for making it work.\
He/she have yet to learn how to properly handle SQL queries, cookies and other stuff, and that's totally fine!\

Senior developers should provide some form of mentorship in order to make sure that junior devs can understand their errors, and such bad code won't go in production.\

I know for sure that there are certain companies that doesn't really care about the code that they're shipping.\
Does it solve a problem? Deploy it.\
Is it written by a junior, without even an approval from a senior dev? Deploy it.\

Shit happens.

## UPDATE 2020/08/03

After discussing this article on [Reddit](https://www.reddit.com/r/programming/comments/i1ph52/reviewing_the_worst_piece_of_code_ever), a very nice guy reached out sharing the following Reddit thread: [https://www.reddit.com/r/programminghorror/comments/66klvc/this_javascript_code_powers_a_1500_user_intranet](https://www.reddit.com/r/programminghorror/comments/66klvc/this_javascript_code_powers_a_1500_user_intranet)

"_This JavaScript code powers a 1,500 user intranet application_"

so apparently I was wrong. This piece of code is not fake!