import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  description: '.promoDescription',
};

const mockProps = {
  title: 'random title',
  description: 'random description',
};

describe('Component HappyHourAdd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render header and description', () => {
    const component = shallow(<HappyHourAd />);

    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.description)).toEqual(true);
  });

  it('should display title and description delivered via props', () => {
    const component = shallow(<HappyHourAd title={mockProps.title} description={mockProps.description}/>);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
    expect(component.find(select.description).text()).toEqual(mockProps.description);
  });
});
