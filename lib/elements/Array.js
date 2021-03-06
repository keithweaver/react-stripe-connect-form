import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Textbox } from 'weav';

import Obj from './Obj';


import { convertProperLabelFromKey, findNewFontSize } from '../utils/label';


const Array = (props) => {
  const {
    label,
    list,
    keysNotToDisplay,
    specialLabels,
    fontSize,
    onValueChange,
    objectPath,
    shrinkingFont,
  } = props;

  return (
    <div>
      {
        (label) ? (
          <p
            style={{
              fontSize,
            }}
          >
            {convertProperLabelFromKey(label, specialLabels)}
          </p>
        ) : (null)
      }
      {
        list.map((item, itemIndex) => {
          // "example 1"
          if (
            _.isString(item) &&
            !_.includes(keysNotToDisplay, item)
          ) {
            return (
              <Textbox
                value={item}
                onChange={(e) => { onValueChange(objectPath, e.target.value); }}
              />
            );
          } else if (
            _.isArray(item) &&
            !_.includes(keysNotToDisplay, item)
          ) {
            return (
              <Array
                {...props}
                list={item}
                fontSize={findNewFontSize(shrinkingFont, fontSize)}
                objectPath={`${objectPath}[${itemIndex}]`}
              />
            );
          } else if (
            _.isObject(item) &&
            !_.includes(keysNotToDisplay, item)
          ) {
            return (
              <Obj
                {...props}
                obj={item}
                fontSize={findNewFontSize(shrinkingFont, fontSize)}
                objectPath={`${objectPath}[${itemIndex}]`}
              />
            );
          }
          return null;
        })
      }
    </div>
  );
};

Array.propTypes = {
  label: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.any),
  keysNotToDisplay: PropTypes.arrayOf(PropTypes.string),
  // eslint-disable-next-line react/forbid-prop-types
  specialLabels: PropTypes.object,
  fontSize: PropTypes.number,
  onValueChange: PropTypes.func.isRequired,
  objectPath: PropTypes.string,
};

Array.defaultProps = {
  label: null,
  list: [],
  fontSize: 14,
  keysNotToDisplay: [],
  specialLabels: {},
  objectPath: '',
};

export default Array;
