/**
 * @file todoListModel.js
 */

export default {
    nameSpace: 'todoList',
    state: {

        /**
         * initial state value
         */
        list: ['item-1', 'item-2', 'item-3']

    },
    reducers: {

        /**
         * Update item
         * @param state
         * @param index
         * @param value
         * @returns {*&{list: *[]}}
         */
        updateItem: (state, {index, value}) => {
            const nextList = [...state.list];
            nextList[index] = value;
            return {
                ...state,
                list: nextList
            };
        },

        /**
         * Add list item
         * @param state
         * @param item
         * @returns {*&{list: *[]}}
         */
        add: (state, {item}) => {
            return {
                ...state,
                list: [
                    ...state.list,
                    item
                ]
            };
        },

        /**
         * Remove list item
         * @param state
         * @param index
         * @returns {*&{list: *[]}}
         */
        remove: (state, {index}) => {
            const nextList = [...state.list];
            nextList.splice(index, 1);
            return {
                ...state,
                list: nextList
            };
        }

    }
};
