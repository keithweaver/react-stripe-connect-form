import React from 'react';
import { Button } from 'weav';
import PropTypes from 'prop-types';

const saveRowStyle = {
  width: '100%',
  paddingTop: 10,
  paddingBottom: 15,
  textAlign: 'right',
};

const SaveBtnRow = (props) => {
  const {
    onSave,
  } = props;
  return (
    <div
      style={saveRowStyle}
    >
      <Button
        capitalize
        onClick={onSave}
      >
        Save
      </Button>
    </div>
  );
};


SaveBtnRow.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default SaveBtnRow;
