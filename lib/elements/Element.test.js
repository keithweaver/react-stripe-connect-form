/* eslint-disable */
// test file
import React from 'react';
import { shallow } from 'enzyme';
// , mount, render

import Element from './Element';

describe('Element', () => {
  test('Shallow render of the element. Basic render, no props.', () => {
    const wrapper = shallow(
      <Element
        onValueChange={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the element. Render with value.', () => {
    const wrapper = shallow(
      <Element
        value="Foobar"
        onValueChange={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the element. Render with value and label.', () => {
    const wrapper = shallow(
      <Element
        label="Foo"
        value="Bar"
        onValueChange={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the element with specific font size.', () => {
    const wrapper = shallow(
      <Element
        label="Foo"
        fontSize={12}
        value="Bar"
        onValueChange={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the element with special textbox style.', () => {
    const wrapper = shallow(
      <Element
        label="Foo"
        textboxStyle={{
          color: 'red',
        }}
        value="Bar"
        onValueChange={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the element with special label style.', () => {
    const wrapper = shallow(
      <Element
        label="Foo"
        labelStyle={{
          color: 'red',
        }}
        value="Bar"
        onValueChange={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the element with special labels.', () => {
    const wrapper = shallow(
      <Element
        label="Foo"
        specialLabels={{
          Foo: "Bar",
        }}
        value="Bar"
        onValueChange={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
