import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../Utils';
import CommonPopUp from '../component/CommonPopUp';


const setUp = (props = {}) => {
    const component = shallow(<CommonPopUp {...props} />);
    return component;
};



describe('CommonPopUp Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps = {
                popUpType: "Version",
                entityList: [{
                    CompanyId: 1,
                    CompanyName: 'BMW',
                    ModelId: 1,
                    ModelName: 'X1',
                    Rating: 5,
                    VersionId: 1,
                    ImageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45242/bmw-x1-facelift-right-front-three-quarter2.jpeg?q=85",
                    VersionName: 'sDrive 20i SportX',
                    Price: 43.12
                }],
                changeEntityFlag: () => { },
                selectedEntity: [{
                    CompanyId: 1,
                    CompanyName: 'BMW',
                    ModelId: 1,
                    ModelName: 'X1',
                    Rating: 5,
                    VersionId: 1,
                    ImageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45242/bmw-x1-facelift-right-front-three-quarter2.jpeg?q=85",
                    VersionName: 'sDrive 20i SportX',
                    Price: 43.12
                }],
                popUpVisible: true
            }

            const propsErr = checkProps(CommonPopUp, expectedProps)
            expect(propsErr).toBeUndefined();
        });

    });

});

