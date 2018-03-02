import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Textbox } from 'weav';
import objectAssign from 'object-assign';

import { convertProperLabelFromKey } from '../utils/label';

import {
  textboxBasicStyle,
  labelBasicStyle,
} from './Element.style';

class Element extends Component {
  constructor(props) {
    super(props);

    const {
      value,
    } = props;

    this.state = {
      value,
    };

    this.updateElement = this.updateElement.bind(this);
  }

  updateElement(e) {
    const {
      objectPath,
      onValueChange,
    } = this.props;
    const { value } = e.target;

    this.setState({
      value,
    });

    onValueChange(objectPath, value);
  }

  render() {
    const {
      label,
      specialLabels,
      fontSize,
      labelStyle,
      textboxStyle,
    } = this.props;

    const {
      value,
    } = this.state;

    const id = `id_${Math.random()}`;

    return (
      <div>
        <p
          htmlFor={id}
          style={
            objectAssign(
              labelBasicStyle,
              {
                fontSize,
              },
              labelStyle,
            )
          }
        >
          {convertProperLabelFromKey(label, specialLabels)}
        </p>
        <Textbox
          value={value}
          id={id}
          style={
            objectAssign(
              textboxBasicStyle,
              textboxStyle,
            )
          }
          onChange={this.updateElement}
        />
      </div>
    );
  }
}

Element.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  specialLabels: PropTypes.object,
  fontSize: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  textboxStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  labelStyle: PropTypes.object,
  onValueChange: PropTypes.func.isRequired,
  objectPath: PropTypes.string,
};

Element.defaultProps = {
  label: '',
  value: '',
  specialLabels: {},
  textboxStyle: {},
  labelStyle: {},
  objectPath: '',
};

export default Element;
