import React from 'react';
import { mount } from 'enzyme';
import TableComponent from '../TableComponent';
import Loader from '../Loader';
import Table from 'react-bootstrap/Table';

describe('Table component', () => {
    test('Table component renders without crashing', () => {
        const mockProps = {
          headers: [],
          data: [],
          isLoading: false,
        };
        const componentWrapper = mount(<TableComponent {...mockProps} />);
        expect(componentWrapper.length).toEqual(1);
    });

    test('Component displays loader if isLoading prop is truthy', () => {
      const mockProps = {
        headers: [],
        data: [],
        isLoading: true,
      };
      const componentWrapper = mount(<TableComponent {...mockProps} />);
      expect(componentWrapper.find(Loader).exists()).toBeTruthy();
    });

    test('Component displays table if isLoading prop is falsey', () => {
      const mockProps = {
        headers: [],
        data: [],
        isLoading: false,
      };
      const componentWrapper = mount(<TableComponent {...mockProps} />);
      expect(componentWrapper.find(Table).exists()).toBeTruthy();
    });
});
