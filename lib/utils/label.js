import _ from 'lodash';


export const removeUnderscore = key => (
  _.replace(key, /_/g, ' ')
);

export const makeUpperCase = key => (
  key.toUpperCase()
);

export const convertProperLabelFromKey = (key, specialLabels) => {
  if (_.has(specialLabels, key)) {
    return specialLabels[key];
  }
  return makeUpperCase(removeUnderscore(key));
};

export const findNewFontSize = (fontSize) => {
  if (fontSize < 11) {
    return 11;
  }
  return (fontSize - 2);
};
