/**
 * @file TodoList.js
 */

import React from 'react';
import {useModel} from 'react-vivy';

const TodoList = () => {

    /**
     * Get state and reducer from model "todoList" using hook "useModel".
     */
    const {list, updateItem, remove} = useModel('todoList');

    console.log('list::', list);

    return (
        <ul>
            {
                list.map((item, index) =>
                    <li key={index}>
                        <input value={item}
                               onChange={e => updateItem({
                                   index,
                                   value: e.target.value
                               })}/>
                        <button style={{
                            marginLeft: 8
                        }}
                                onClick={() => remove({index})}>
                            remove
                        </button>
                    </li>
                )
            }
        </ul>
    );

};

export default TodoList;
