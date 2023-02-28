[npm-image]: https://img.shields.io/npm/v/react-vivy.svg?style=flat-square

[npm-url]: https://npmjs.org/package/react-vivy

[license-image]: https://img.shields.io/npm/l/react-vivy.svg?style=flat-square

[vivy-url]: https://github.com/fatalxiao/vivy

[react-redux-url]: https://github.com/reduxjs/react-redux

[calculation-example-url]: https://github.com/fatalxiao/react-vivy/tree/main/examples/calculation

[pieb-with-dpe-frontend-url]: https://github.com/fatalxiao/pieb-with-dpe-frontend

# react-vivy

[![NPM Version][npm-image]][npm-url]
[![License][license-image]][npm-url]

React bindings for [Vivy][vivy-url] based on [react-redux][react-redux-url].

## Docs

* [Installation](#installation)
* [Examples](#examples)
    * [Examples in repository](#examples-in-repository)
    * [Complete and real project example](#complete-and-real-project-example)
* [Documentation](#documentation)
    * [Basic usage](#basic-usage)

## Installation

Using npm:

```shell
$ npm install vivy react-vivy
```

## Examples

### Examples in repository

```shell
$ cd ./examples/[EXAMPLE_NAME]
$ npm run start
```

**Example names**:

* [calculation][calculation-example-url]

### Complete and real project example

* [pieb-with-dpe-frontend][pieb-with-dpe-frontend-url]

## Documentation

### Basic usage

```js
import React from 'react';

// Import hook "useModel"
import {useModel} from 'react-vivy';

const App = () => {

    // Get model state, actions and reducers
    const [modelState, modelActions] = useModel('MODEL_NAME_SPACE');

    // Get some value from modelState
    const {value} = modelState;

    // Get some actions or reducers from modelActions
    const {updateValue} = modelActions;

    return (
        <input value={value}
               onChange={e => updateValue({value: e.target.value})}/>
    );

};

export default App;
```
