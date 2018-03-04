import React, { Component } from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';

import {
  labelBasicStyle,
  textboxBasicStyle,
} from './Boolean.style';
import { convertProperLabelFromKey } from '../utils/label';


class Boolean extends Component {
  constructor(props) {
    super(props);

    const {
      value,
    } = props;

    this.state = {
      value,
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox() {
    const {
      onValueChange,
      objectPath,
    } = this.props;
    const {
      value,
    } = this.state;

    this.setState({
      value: !value,
    });

    onValueChange(objectPath, !value);
  }

  render() {
    const {
      label,
      options,
      specialLabels,
      fontSize,
      checkboxStyle,
      labelStyle,
    } = this.props;
    const {
      value,
    } = this.state;

    const formattedOptions = [];
    for (let i = 0; i < options.length; i += 1) {
      formattedOptions.push({
        value: options[i],
        label: options[i],
      });
    }

    const id = `id_${Math.random()}`;
    return (
      <div>
        <label
          htmlFor={id}
          style={
            objectAssign(
              {},
              labelBasicStyle,
              {
                fontSize,
              },
              labelStyle,
            )
          }
        >
          <input
            type="checkbox"
            style={
              objectAssign(
                {},
                textboxBasicStyle,
                {
                  maxWidth: 300,
                },
                checkboxStyle,
              )
            }
            checked={value}
            onChange={this.handleCheckbox}
          />
          {convertProperLabelFromKey(label, specialLabels)}
        </label>
      </div>
    );
  }
}

Boolean.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  options: PropTypes.arrayOf(PropTypes.any),
  // eslint-disable-next-line react/forbid-prop-types
  specialLabels: PropTypes.object,
  fontSize: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  labelStyle: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  checkboxStyle: PropTypes.object.isRequired,
  onValueChange: PropTypes.func.isRequired,
  objectPath: PropTypes.string,
};

Boolean.defaultProps = {
  label: '',
  value: '',
  options: [],
  specialLabels: {},
  objectPath: '',
};

export default Boolean;
