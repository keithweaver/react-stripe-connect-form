import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import Array from './Array';
import Element from './Element';
import Boolean from './Boolean';
import ReadOnly from './ReadOnly';

import { convertProperLabelFromKey, findNewFontSize } from '../utils/label';

const Obj = (props) => {
  const {
    label,
    obj,
    keysNotToDisplay,
    readOnlyFields,
    fontSize,
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
            {convertProperLabelFromKey(label)}
          </p>
        ) : (null)
      }
      {
        Object.keys(obj).map((key) => {
          let nextObjectPath = key;
          if (objectPath !== '') {
            nextObjectPath = `${objectPath}.${key}`;
          }
          /*
           * ...props pass these through:
           * keysNotToDisplay= keysNotToDisplay
           * readOnlyFields= readOnlyFields
           * specialLabels= specialLabels
           */
          if (
            _.isArray(obj[key]) &&
            !_.includes(keysNotToDisplay, key)
          ) {
            return (
              <Array
                {...props}
                key={Math.random()}
                label={key}
                list={obj[key]}
                fontSize={findNewFontSize(shrinkingFont, fontSize)}
                objectPath={nextObjectPath}
              />
            );
          } else if (
            _.isObject(obj[key]) &&
            !_.includes(keysNotToDisplay, key)
          ) {
            return (
              <Obj
                {...props}
                key={Math.random()}
                label={key}
                obj={obj[key]}
                fontSize={findNewFontSize(shrinkingFont, fontSize)}
                objectPath={nextObjectPath}
              />
            );
          } else if (
            _.isBoolean(obj[key]) &&
            !_.includes(keysNotToDisplay, key)
          ) {
            return (
              <Boolean
                {...props}
                key={Math.random()}
                label={key}
                value={obj[key]}
                options={['true', 'false']}
                fontSize={findNewFontSize(shrinkingFont, fontSize)}
                objectPath={nextObjectPath}
              />
            );
          } else if (_.includes(keysNotToDisplay, key)) {
            return null;
          } else if (_.includes(readOnlyFields, key)) {
            return (
              <ReadOnly
                {...props}
                key={Math.random()}
                label={key}
                value={obj[key]}
                fontSize={findNewFontSize(shrinkingFont, fontSize)}
                objectPath={nextObjectPath}
              />
            );
          }

          return (
            <Element
              {...props}
              key={Math.random()}
              label={key}
              value={obj[key]}
              fontSize={findNewFontSize(shrinkingFont, fontSize)}
              objectPath={nextObjectPath}
            />
          );
        })
      }
    </div>
  );
};

Obj.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  obj: PropTypes.object,
  label: PropTypes.string,
  keysNotToDisplay: PropTypes.arrayOf(PropTypes.string),
  readOnlyFields: PropTypes.arrayOf(PropTypes.string),
  fontSize: PropTypes.number.isRequired,
  objectPath: PropTypes.string,
};

Obj.defaultProps = {
  obj: {},
  label: null,
  keysNotToDisplay: [],
  readOnlyFields: [],
  objectPath: '',
};

export default Obj;
