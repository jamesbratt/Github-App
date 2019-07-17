import React from 'react';
import { mount } from 'enzyme';
import Form from '../Form';

describe('Form component', () => {
    test('Form renders without crashing', () => {
        const mockCallback = jest.fn();
        const componentWrapper = mount(<Form update={mockCallback} />);
        expect(componentWrapper.length).toEqual(1);
    });

    test('Form makes callback on submission', () => {
      const mockCallback = jest.fn();
      const componentWrapper = mount(<Form update={mockCallback} />);

      componentWrapper.find('.btn-primary').simulate('click');
      expect(mockCallback).toHaveBeenCalledWith('', 'repos');
    });
});
