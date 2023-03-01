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

React bindings for [Vivy][vivy-url] based on [react-redux][react-redux-url]. It exports all components and hooks
from [react-redux][react-redux-url], and also exports the custom hooks for [Vivy][vivy-url].

## Docs

* [Installation](#installation)
* [Examples](#examples)
    * [Examples in repository](#examples-in-repository)
    * [Complete and real project example](#complete-and-real-project-example)
* [Documentation](#documentation)
    * [Basic usage](#basic-usage)
    * [Hooks](#hooks)

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

    // Get model state, actions and reducers using hook "useModel".
    const [modelState, modelActions] = useModel('MODEL_NAME_SPACE');
    // "useModel" can also accept a model as an argument.
    // import model from 'MODEL_PATH';
    // const [modelState, modelActions] = useModel(model);

    // Get some value from modelState.
    const {value} = modelState;

    // Get some actions or reducers from modelActions.
    const {updateValue} = modelActions;

    return (
        <input value={value}
               onChange={e => updateValue({value: e.target.value})}/>
    );

};

export default App;
```

### Hooks

#### useModel

```js
import {useModel} from 'react-vivy';

// Get model state, actions and reducers
const [modelState, modelActions] = useModel('MODEL_OR_NAME_SPACE');
```

#### useModelState

```js
import {useModelState} from 'react-vivy';

// Get model state
const modelState = useModelState('MODEL_OR_NAME_SPACE');
```

#### useModelActions

```js
import {useModelActions} from 'react-vivy';

// Get model actions and reducers
const modelActions = useModelActions('MODEL_OR_NAME_SPACE');
```

#### useGlobalReducers

```js
import {useGlobalReducers} from 'react-vivy';

// Get all global reducers
const globalReducers = useGlobalReducers();
```
