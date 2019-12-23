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
    /* expect(component.find(select.description).text()).toEqual(mockProps.description); */
  });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length) {
      super(...args);
    } else {
      super (customDate);
    }
    return this;
  }

  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
    const component = shallow(<HappyHourAd {...mockProps}/>);
    const renderedTime = component.find(select.description).text();

    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAdd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');

});
