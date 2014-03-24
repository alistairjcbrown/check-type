# check-type

A type checking framework for Javascript.

## Installation

Module can be installed using `npm`.

```
npm install check-type
```

## Testing

Linting and mocha tests can be run with `grunt`.

```
grunt go
```

---

## Init

`check-type` does not actually contain any type checking functionality. Instead, functions are provided through the `init` function and called through the `check` interface.

Each call to the `init` function will add type checking functions which have not already been defined. These are added to an internal mapping.

### Using `underscore` type checking functions

```js
var _ = require("underscore"),
	check = require("check-type");

// Initialise check with underscore functions
check.init(_.reduce(_.functions(_), function (result, item) {
    result[item] = _[item];
    return result;
}, {}));
```

### Using custom type checking functions

```js
var custom_functions = {
		"isEmail": function() {
			// ... implement ...
		},
		"isUsername": function() {
			// ... implement ...
		}
	},
	check = require("check-type");

// Initialise check with custom checking functions
check.init(custom_functions);
```

## Clear

This clears all of the internal stored type checking functions.

```js
check.clear();
```


---

## Type checking

Once the `check` function has been initialised (eg. with underscore as above), it can utilise any type checking functions.

### Example: Checking for string using `is`

```js
var my_string = "hello world";

check(my_string).is("string"); // true
check(my_string).is("number"); // false
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
check(my_object).has("foo.bar"); // false
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

if (
	check(my_object).has("hello.world") &&
	check(my_object.hello.world).is("string")
}{
	// Success
}
```
