import React from 'react';
import { mount } from 'enzyme';
import AlertComponent from '../AlertComponent';
import Alert from 'react-bootstrap/Alert';

describe('Alert component', () => {
    test('Alert renders without crashing', () => {
        const componentWrapper = mount(<AlertComponent message='test' />);
        expect(componentWrapper.length).toEqual(1);
    });

    test('Alert contains message', () => {
      const message = 'test';
      const componentWrapper = mount(<AlertComponent message={message} />);
      const alert = componentWrapper.find(Alert);
      expect(alert.text()).toEqual(message);
    });
});
