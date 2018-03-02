import React from 'react';
import PropTypes from 'prop-types';
import { Textbox } from 'weav';
import objectAssign from 'object-assign';

import { convertProperLabelFromKey } from '../utils/label';

import {
  textboxBasicStyle,
  labelBasicStyle,
} from './StripeElement.style';

const StripeElement = (props) => {
  const {
    label,
    value,
    specialLabels,
    fontSize,
    labelStyle,
    textboxStyle,
    onValueChange,
    objectPath,
  } = props;

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
        onChange={(e) => { onValueChange(objectPath, e.target.value); }}
      />
    </div>
  );
};

StripeElement.propTypes = {
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

StripeElement.defaultProps = {
  label: '',
  value: '',
  specialLabels: {},
  textboxStyle: {},
  labelStyle: {},
  objectPath: '',
};

export default StripeElement;
