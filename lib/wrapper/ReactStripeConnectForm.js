import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LoadingBar } from 'weav';

import SaveBtnRow from '../elements/SaveBtnRow';
import Obj from '../elements/Obj';


class ReactStripeConnectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      stripeAccount: this.props.stripeAccount,
    };

    this.saveStripeInformation = this.saveStripeInformation.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(path, value) {
    const {
      updateStripeAccount,
    } = this.props;


    updateStripeAccount(path, value);
  }

  saveStripeInformation() {
    const {
      saveStripeAccount,
    } = this.props;
    const {
      stripeAccount,
    } = this.state;

    saveStripeAccount(stripeAccount);
  }

  render() {
    const {
      loadingComponent,
      stripeAccount,
    } = this.props;
    const {
      isLoading,
    } = this.state;

    return (
      <div>
        {
          (!isLoading) ? (
            <SaveBtnRow
              onSave={this.saveStripeInformation}
            />
          ) : (loadingComponent)
        }
        {
          <Obj
            {...this.props}
            obj={stripeAccount}
            onValueChange={this.onValueChange}
          />
        }
      </div>
    );
  }
}

ReactStripeConnectForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  stripeAccount: PropTypes.object.isRequired,
  uniqueIdentifier: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  readOnlyFields: PropTypes.arrayOf(PropTypes.string),
  keysNotToDisplay: PropTypes.arrayOf(PropTypes.string),
  // eslint-disable-next-line react/forbid-prop-types
  labelStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  textboxStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  checkboxStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  readOnlyLabelStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  readOnlyTextboxStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  editableLabelStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  editableTextboxStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  specialLabels: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  loadingComponent: PropTypes.object,
  updateStripeAccount: PropTypes.func,
  saveStripeAccount: PropTypes.func,
};

ReactStripeConnectForm.defaultProps = {
  fontSize: 16,
  labelStyle: {},
  textboxStyle: {},
  checkboxStyle: {},
  readOnlyLabelStyle: {},
  readOnlyTextboxStyle: {},
  editableLabelStyle: {},
  editableTextboxStyle: {},
  readOnlyFields: [
    'interval',
    'delay_days',
    'payout_statement_descriptor',
    'payouts_enabled',
    'charges_enabled',
    'business_tax_id_provided',
    'product_description',
    'details_submitted',
  ],
  specialLabels: {
    dob: 'DATE OF BIRTH',
  },
  keysNotToDisplay: [
    'disabled_reason',
    'fields_needed',
    'due_by',
    'verification',
    'id',
    'object',
    'url',
    'created',
  ],
  loadingComponent: (
    <LoadingBar
      text="Loading..."
    />
  ),
  updateStripeAccount: () => {},
  saveStripeAccount: () => {},
};

export default ReactStripeConnectForm;
