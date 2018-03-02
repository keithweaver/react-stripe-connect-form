import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import StripeArray from './StripeArray';
import StripeElement from './StripeElement';
import StripeBoolean from './StripeBoolean';
import StripeReadOnly from './StripeReadOnly';

import { convertProperLabelFromKey, findNewFontSize } from '../utils/label';

const StripeObject = (props) => {
  const {
    label,
    obj,
    keysNotToDisplay,
    readOnlyFields,
    fontSize,
    objectPath,
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
              <StripeArray
                {...props}
                key={Math.random()}
                label={key}
                list={obj[key]}
                fontSize={findNewFontSize(fontSize)}
                objectPath={nextObjectPath}
              />
            );
          } else if (
            _.isObject(obj[key]) &&
            !_.includes(keysNotToDisplay, key)
          ) {
            return (
              <StripeObject
                {...props}
                key={Math.random()}
                label={key}
                obj={obj[key]}
                fontSize={findNewFontSize(fontSize)}
                objectPath={nextObjectPath}
              />
            );
          } else if (
            _.isBoolean(obj[key]) &&
            !_.includes(keysNotToDisplay, key)
          ) {
            return (
              <StripeBoolean
                {...props}
                key={Math.random()}
                label={key}
                value={obj[key]}
                options={['true', 'false']}
                fontSize={findNewFontSize(fontSize)}
                objectPath={nextObjectPath}
              />
            );
          } else if (_.includes(keysNotToDisplay, key)) {
            return null;
          } else if (_.includes(readOnlyFields, key)) {
            return (
              <StripeReadOnly
                {...props}
                key={Math.random()}
                label={key}
                value={obj[key]}
                fontSize={findNewFontSize(fontSize)}
                objectPath={nextObjectPath}
              />
            );
          }

          return (
            <StripeElement
              {...props}
              key={Math.random()}
              label={key}
              value={obj[key]}
              fontSize={findNewFontSize(fontSize)}
              objectPath={nextObjectPath}
            />
          );
        })
      }
    </div>
  );
};

StripeObject.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  obj: PropTypes.object,
  label: PropTypes.string,
  keysNotToDisplay: PropTypes.arrayOf(PropTypes.string),
  readOnlyFields: PropTypes.arrayOf(PropTypes.string),
  fontSize: PropTypes.number.isRequired,
  objectPath: PropTypes.string,
};

StripeObject.defaultProps = {
  obj: {},
  label: null,
  keysNotToDisplay: [],
  readOnlyFields: [],
  objectPath: '',
};

export default StripeObject;
