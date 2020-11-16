import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../Utils';
import CarImage from '../component/CarImage';


const setUp = (props = {}) => {
    const component = shallow(<CarImage {...props} />);
    return component;
};



describe('CarImage Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps = {
                model: [{
                    ModelId: 1,
                    ModelName: 'X1',
                    Rating: 5,
                    ImageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45242/bmw-x1-facelift-right-front-three-quarter2.jpeg?q=85",

                }]
            };
            const propsErr = checkProps(CarImage, expectedProps)
            expect(propsErr).toBeUndefined();

        });

    });

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'imageandinfo');
            expect(component.length).toBe(0);
        });


    });




    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                model: [{
                    ModelId: 1,
                    ModelName: 'X1',
                    Rating: 5,
                    ImageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45242/bmw-x1-facelift-right-front-three-quarter2.jpeg?q=85",

                }]

            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'imageandinfo');
            expect(component.length).toBe(1);
        });

    });


});