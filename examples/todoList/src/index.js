/**
 * @file index.js
 */

import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-vivy';

// Import Vivy
import Vivy from 'vivy';

// Component and model
import Root from './components/Root';
import todoListModel from './model/todoList';

// Create vivy
const vivy = Vivy();

// Create store after configuration
const store = vivy.createStore();

// Register model to store
store.registerModel(todoListModel);

createRoot(document.getElementById('app-container')).render(
    <Provider store={store}>
        <Root/>
    </Provider>
);
