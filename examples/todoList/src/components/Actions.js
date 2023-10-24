/**
 * @file Actions.js
 */

import React from 'react';
import {useModel} from 'react-vivy';

const Actions = () => {

    /**
     * Get reducer from model "todoList" using hook "useModelActions".
     */
    const {add} = useModel('todoList');

    return (
        <button onClick={() => add?.({
            item: 'New item'
        })}>
            Add
        </button>
    );

};

export default Actions;
