# check-type

A type checking framework for Javascript.

## Using

### NodeJs

Module can be installed using `npm`.

```
npm install check-type
```

### RequireJs

Instructions coming soon...

### Browser

Instructions coming soon...



---



## Testing

Built in tests and linting using [Grunt](http://gruntjs.com/) using [JSHint](http://www.jshint.com/about/) and [Mocha](http://visionmedia.github.io/mocha/).

```sh
npm install  # install dev dependencies
grunt go     # call go task to lint and test
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

Once the `check` function has been initialised, it can utilise any defined type checking functions.

### Example: Checking for string using `is`

```js
var my_string = "hello world";
check.init();

check(my_string).is("string"); // true
check(my_string).is("number"); // false

check(my_string).is("foo");    // throws Error
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
check(my_object).has("foo.bar");    // false
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
