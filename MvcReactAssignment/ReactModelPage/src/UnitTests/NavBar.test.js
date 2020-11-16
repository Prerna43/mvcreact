import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../Utils';
import NavBar from '../component/NavBar';


const setUp = (props = {}) => {
    const component = shallow(<NavBar {...props} />);
    return component;
};



describe('NavBar Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps = {
                selectedLocation: "Alwar",
                changeEntityFlag: () => { }
            }

            const propsErr = checkProps(NavBar, expectedProps)
            expect(propsErr).toBeUndefined();
        });

    });

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'navbar');
            expect(component.length).toBe(0);
        });


    });


    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                selectedLocation: "Alwar",
                changeEntityFlag: (tprops) => { }

            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'navbar');
            expect(component.length).toBe(0);
        });

    });

});

