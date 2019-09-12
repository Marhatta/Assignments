import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Products from './Products';
import Product from '../../components/Product/Product';

configure({adapter:new Adapter()});

describe('<Products />', () => {
    it('should render <Product />',() => {
        const wrapper = shallow(<Products products={[{},{}]}/>);
        expect(wrapper.find(Product)).toHaveLength(2);
    });
});