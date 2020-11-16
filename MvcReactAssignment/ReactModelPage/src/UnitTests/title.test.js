import React from 'react';
import { shallow } from 'enzyme';
import Title from '../component/title';
const title = 'Test Title';
let wrapped = shallow(<Title>{title}</Title>);
import PropsTypes from "prop-types";



describe('Title', () => {
    it('should render the Title Component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });
    it('renders the Titles children', () => {
        expect(wrapped.find('h1').text()).toEqual(title);
    });

});