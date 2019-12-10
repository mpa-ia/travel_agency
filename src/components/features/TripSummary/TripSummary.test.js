import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render link to correct path', () => {
    const id = 'abc';
    const component = shallow(<TripSummary id={id} image='image.jpg' name='name' cost='1000' tags={['a', 'b']}/>);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${id}`);
  });

  it('renders correct img & alt', () => {
    const expectedImg = 'image.jpg';
    const expectedAlt = 'abc';
    const component = shallow(<TripSummary image={expectedImg} id='id' name={expectedAlt} cost='1000' tags={['a', 'b']} />);

    expect(component.find('img').prop('src')).toEqual(expectedImg);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
});
