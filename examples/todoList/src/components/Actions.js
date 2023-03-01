/**
 * @file Actions.js
 */

import React, {useCallback} from 'react';
import {useModelActions} from 'react-vivy';

const Actions = () => {

    /**
     * Get reducer from model "todoList" using hook "useModelActions".
     */
    const {add} = useModelActions('todoList');

    /**
     * Handle add item
     * @type {(function(): void)|*}
     */
    const handleAdd = useCallback(() => {
        add?.({
            item: 'New item'
        });
    }, [
        add
    ]);

    return (
        <button onClick={handleAdd}>
            Add
        </button>
    );

};

export default Actions;
