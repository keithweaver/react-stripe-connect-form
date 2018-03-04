/* eslint-disable */
// test file
import React from 'react';
import { mount } from 'enzyme';

import ReactStripeConnectForm from '../lib/wrapper/ReactStripeConnectForm';


describe('Canada', () => {
  test('Render Personal Account.', () => {
    const stripeAccount = {
      "id": "acct_1032D82eZvKYlo2C",
      "object": "account",
      "business_logo": null,
      "business_name": null,
      "business_url": null,
      "charges_enabled": false,
      "country": "CA",
      "created": 1385798567,
      "debit_negative_balances": true,
      "decline_charge_on": {
        "avs_failure": true,
        "cvc_failure": false
      },
      "default_currency": "cad",
      "details_submitted": false,
      "display_name": "Stripe.com",
      "email": "site@stripe.com",
      "external_accounts": {
        "object": "list",
        "data": [

        ],
        "has_more": false,
        "total_count": 0,
        "url": "/v1/accounts/acct_1032D82eZvKYlo2C/external_accounts"
      },
      "legal_entity": {
        "additional_owners": [

        ],
        "address": {
          "city": null,
          "country": "CA",
          "line1": null,
          "line2": null,
          "postal_code": null,
          "state": null
        },
        "business_name": null,
        "business_tax_id_provided": false,
        "dob": {
          "day": null,
          "month": null,
          "year": null
        },
        "first_name": null,
        "last_name": null,
        "personal_address": {
          "city": null,
          "country": "US",
          "line1": null,
          "line2": null,
          "postal_code": null,
          "state": null
        },
        "personal_id_number_provided": false,
        "ssn_last_4_provided": false,
        "type": null,
        "verification": {
          "details": null,
          "details_code": "failed_other",
          "document": null,
          "status": "unverified"
        }
      },
      "metadata": {
      },
      "payout_schedule": {
        "delay_days": 7,
        "interval": "daily"
      },
      "payout_statement_descriptor": null,
      "payouts_enabled": false,
      "product_description": null,
      "statement_descriptor": "",
      "support_email": null,
      "support_phone": null,
      "timezone": "US/Pacific",
      "tos_acceptance": {
        "date": null,
        "ip": null,
        "user_agent": null
      },
      "type": "standard",
      "verification": {
        "disabled_reason": "fields_needed",
        "due_by": null,
        "fields_needed": [
          "business_url",
          "external_account",
          "legal_entity.address.city",
          "legal_entity.address.line1",
          "legal_entity.address.postal_code",
          "legal_entity.address.state",
          "legal_entity.dob.day",
          "legal_entity.dob.month",
          "legal_entity.dob.year",
          "legal_entity.first_name",
          "legal_entity.last_name",
          "legal_entity.type",
          "product_description",
          "support_phone",
          "tos_acceptance.date",
          "tos_acceptance.ip"
        ]
      }
    };

    const wrapper = mount(
      <ReactStripeConnectForm
        stripeAccount={stripeAccount}
        uniqueIdentifier="id"
        saveStripeAccount={(path, value) => { console.log('save', path, value); }}
        updateStripeAccount={(path, value) => { console.log('update', path, value); }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
