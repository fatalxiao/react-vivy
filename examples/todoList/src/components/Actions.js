/**
 * @file Actions.js
 */

import React from 'react';
import {useModelActions} from 'react-vivy';

const Actions = () => {

    /**
     * Get reducer from model "todoList" using hook "useModelActions".
     */
    const {add} = useModelActions('todoList');

    return (
        <button onClick={() => add?.({
            item: 'New item'
        })}>
            Add
        </button>
    );

};

export default Actions;
