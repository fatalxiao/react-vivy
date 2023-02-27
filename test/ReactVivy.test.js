'use strict';

import React from 'react';
import {configure, render, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



import Vivy from 'vivy';
import {Provider, useStore} from '../src';

// Components
import TestComponent from './mocks/TestComponent';

// Models
import testModel from './mocks/testModel';

configure({adapter: new Adapter()});

test('Vivy', () => {

    const vivy = Vivy();

    const store = vivy.createStore();
    store.registerModel(testModel);

    const dom = mount(
        <Provider store={store}>
            <TestComponent/>
        </Provider>
    );

    const vivyStore = useStore();

    console.log('vivyStore::', vivyStore);

    expect(
        1
    ).toEqual(
        1
    );

});
