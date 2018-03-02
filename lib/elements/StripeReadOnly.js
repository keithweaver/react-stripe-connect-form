import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';

import { convertProperLabelFromKey } from '../utils/label';
import {
  labelBasicStyle,
  textboxBasicStyle,
} from './StripeReadOnly.style';

const StripeReadOnly = (props) => {
  const {
    label,
    value,
    specialLabels,
    fontSize,
    textboxStyle,
    labelStyle,
  } = props;

  const id = `id_${Math.random()}`;

  return (
    <div>
      <p
        htmlFor={id}
        style={
          objectAssign(
            labelBasicStyle,
            labelStyle,
            {
              fontSize,
            },
          )
        }
      >
        {convertProperLabelFromKey(label, specialLabels)}
      </p>
      <p
        style={
          objectAssign(
            textboxBasicStyle,
            textboxStyle,
          )
        }
      >
        {value}
      </p>
    </div>
  );
};

StripeReadOnly.propTypes = {
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
};

StripeReadOnly.defaultProps = {
  label: '',
  value: '',
  specialLabels: {},
  textboxStyle: {},
  labelStyle: {},
};

export default StripeReadOnly;
