/**
 * @file Root.js
 */

import React from 'react';

// Components
import Actions from './Actions';
import TodoList from './TodoList';

const Root = () => (
    <>
        <Actions/>
        <TodoList/>
    </>
);

export default Root;
