import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption name='orderOption' type='number'/>);

    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);

    expect(component).toEqual({});
  });

  it('should display title delivered via props name', () => {
    const expectedTitle = 'The title';
    const component = shallow(<OrderOption name={expectedTitle} type='number' />);

    expect(component.find('.title').text()).toEqual(expectedTitle);
    console.log(component.debug());
  });
});
