import React from 'react';
import { mount } from 'enzyme';
import Loader from '../Loader';

describe('Loader component', () => {
    test('Loader renders without crashing', () => {
        const componentWrapper = mount(<Loader />);
        expect(componentWrapper.length).toEqual(1);
    });
});
