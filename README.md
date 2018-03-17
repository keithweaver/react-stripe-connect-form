# react-stripe-connect-form
React Stripe Connect form.


```
const stripeAccount = {
  "id": "acct_1032D82eZvKYlo2C",
  "object": "account",
  "business_logo": null,
  ...stripe connect object...

return (
  <div>
    <ReactStripeConnectForm
      stripeAccount={stripeAccount}
      saveStripeAccount={(stripe) => { console.log('save', stripe); }}
      updateStripeAccount={(objectPath, value) => { console.log('update', objectPath, value); }}
    />
  </div>
);
```

#### Additional Settings

```
// The Stripe Connect object that can be found via the Stripe API:
// https://stripe.com/docs/api#retrieve_account
stripeAccount: PropTypes.object.isRequired,

// Font Size: If you want the labels to be a specific font size.
fontSize: PropTypes.number,

// Shrinking Font: As you get more and more nested, do you want the  font to get smaller.
shrinkingFont: PropTypes.bool,

// readOnlyFields: List of fields display the value but cannot be changed.
readOnlyFields: PropTypes.arrayOf(PropTypes.string),

// keysNotToDisplay: List of fields not to show. This may be fields like "fields_needed".
keysNotToDisplay: PropTypes.arrayOf(PropTypes.string),

// Label Style: Style object for all labels.
labelStyle: PropTypes.object,

// Textbox Style: Style object for all textbox.
textboxStyle: PropTypes.object,

// Checkbox Style: Style object for checkboxes.
checkboxStyle: PropTypes.object,

// readOnlyLabelStyle: Style object for read only labels.
readOnlyLabelStyle: PropTypes.object,

// readOnlyTextboxStyle: Style object for read only fields.
readOnlyTextboxStyle: PropTypes.object,

// editableLabelStyle: Style object for editable labels.
editableLabelStyle: PropTypes.object,

// editableTextboxStyle: Style object for editable fields.
editableTextboxStyle: PropTypes.object,

// specialLabels: If you have any specific label in mind, { field_name: "your_desired_label" }
specialLabels: PropTypes.object,

// isLoading: Mark as loading. Useful when executing a API call.
isLoading: PropTypes.bool,

// The component being displayed while loading.
loadingComponent: PropTypes.object,

showFieldsWhenLoading: PropTypes.bool,
updateStripeAccount: PropTypes.func,
saveStripeAccount: PropTypes.func,
```
