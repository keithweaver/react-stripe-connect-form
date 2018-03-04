/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';

import Array from './Array';

describe('Array', () => {
  test('Shallow render of the array. Basic render, no props.', () => {
    const wrapper = shallow(
      <Array
        onValueChange={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the array. Basic render with label.', () => {
    const wrapper = shallow(
      <Array
        onValueChange={() => {}}
        label="Foobar"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
