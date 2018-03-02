import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import {
  labelBasicStyle,
  textboxBasicStyle,
} from './StripeBoolean.style';
import { convertProperLabelFromKey } from '../utils/label';


const StripeBoolean = (props) => {
  const {
    label,
    value,
    options,
    specialLabels,
    fontSize,
    textboxStyle,
    labelStyle,
    onValueChange,
    objectPath,
  } = props;

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
      <Select
        value={value}
        options={formattedOptions}
        style={
          objectAssign(
            textboxBasicStyle,
            {
              maxWidth: 300,
            },
            textboxStyle,
          )
        }
        onChange={(selectedOption) => { onValueChange(objectPath, selectedOption.value); }}
      />
    </div>
  );
};

StripeBoolean.propTypes = {
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
  textboxStyle: PropTypes.object.isRequired,
  onValueChange: PropTypes.func.isRequired,
  objectPath: PropTypes.string,
};

StripeBoolean.defaultProps = {
  label: '',
  value: '',
  options: [],
  specialLabels: {},
  objectPath: '',
};

export default StripeBoolean;
