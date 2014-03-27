# check-type

A type checking framework for Javascript.


---


## Dependency

This module relies on [Underscore.js](http://underscorejs.org/).


---




## Installation

### NodeJs

`check-type` is available through the [npm package repository](https://npmjs.org/package/check-type).

In a node environment, simply install [using npm](https://www.npmjs.org/).

```
npm install check-type
```

### Bower

`check-type` is available through the [bower package repository](http://bower.io/search/?q=check-type).

For front-end package management, you can install [using Bower](http://bower.io/).

```
bower install check-type
```

### Browser

For manual management, you can grab the Javascript file directly.
You will need to grab `underscore.js` as well.

```
wget https://raw.githubusercontent.com/alistairjcbrown/check-type/master/lib/check-type.js
```



## Use

### NodeJs

```js
var check = require("check-type").init();
```

The module can be required using NodeJS built in `require` ([See example](lib/examples/nodejs)).


### Browser

```html
<script src="/path/to/underscore"></script>
<script src="/path/to/check-type/lib/check-type.js"></script>
<script>
    check.init();
</script>
```

The module can be used in the browser through the `<script>` tag and will bind to `window` ([See example](lib/examples/browser)).


### RequireJS

The module supports the AMD format and uses `define` if available. Therefore it can be used as a RequireJS module ([See Browser example](lib/examples/requirejs/browser), [See NodeJS example](lib/examples/requirejs/nodejs)).

```js
define([ "check-type" ], function(check) {
    check.init();
});
```


---


## Testing

Built in tests and linting using [Grunt](http://gruntjs.com/) to call [JSHint](http://www.jshint.com/about/) and [Mocha](http://visionmedia.github.io/mocha/).

### Test in Nodejs

```
npm install           # install dev dependencies for running on nodejs
grunt test --nodejs   # Run test in nodejs
```

### Test in Browser

```
bower install         # install dev dependencies for running in browser
# Open lib/test/check-type.test.html in browser
```

### Test in Browser under PhantomJS

```
npm install           # install dev dependencies for running on nodejs
bower install         # install dev dependencies for running in browser
grunt test --browser  # Run test in phantomjs
```

### Test All

```
npm install           # install dev dependencies for running on nodejs
bower install         # install dev dependencies for running in browser
grunt test            # Run tests
```


---


## Init

`check-type` does not come with type checking functionality. Instead, it simply provides the `check` interface. Type checking functions should be  provided when calling `check.init`.

`check.init` can be called without parameters which will use the type checking functions from [Underscore.js](http://underscorejs.org/).

`check.init` can be called multiple times and will add type checking functions which have not already been defined.
To override a previously defined type checking function, pass boolean `true` as the second parameter.

### Simple use

```js
var check = require("check-type").init();
```

### More complex use

```js
var check = require("check-type"),
    custom_functions = {
        "isEmail": function(value) {
            return value.indexOf("@") !== -1
        },
        "isEmpty": function(value) {
            return value === "empty";
        }
    },

// Initialise check with underscore type checking functions
//  and custom checking functions, overriding underscore's isEmpty function
check.init()
     .init(custom_functions, true);
```

## Clear

This clears all of the internal stored type checking functions.

```js
check.clear();
```


---


## Type checking

Once the `check` function has been initialised, it can utilise any defined type checking functions using `is`.

### Example: Checking for string using `is`

```js
var my_string = "hello world";
check.init();

check(my_string).is("string"); // true
check(my_string).is("number"); // false

check(my_string).is("foo");    // throws Error for unsupported type
```

You can also negate the check with `is.not`

### Example: Checking for string using `is.not`

```js
var my_string = "hello world";
check.init();

check(my_string).is.not("string"); // false
check(my_string).is.not("number"); // true

check(my_string).is.not("foo");    // throws Error for unsupported type
```

---


## Object path checking

`check-type` can also check for the presence of values within an object under a particular path.

### Example: Checking object path using `has`

```js
var my_object = {
    hello: {
        world: false
    }
};

check(my_object).has("hello.world"); // true
check(my_object).has("foo.bar");     // false
```


---


## Combining type checking and object paths

Type checking and value presence in an object can be used in combination, for example when pulling values from a configuration object.

### Example: Combining `is` and `has`

```js
var my_object = {
    hello: {
        world: "test"
    }
};

if (check(my_object).has("hello.world") &&
    check(my_object.hello.world).is("string")) {
    // Success
}
```
