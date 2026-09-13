({
    handleValidateSubmit : function(component, event, helper) {
        // Find all inputs sharing the 'validateField' aura:id
        var allValid = component.find('validateField').reduce(function (validSoFar, inputCmp) {
            
            // 1. Force the UI to show any hidden validation errors
            inputCmp.showHelpMessageIfInvalid();
            
            // 2. Check the validity object (returns true if valid, false if invalid)
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);

        // Process based on form validity
        if (allValid) {
            // Success Logic: Proceed with Apex call or navigation
            alert('Form submitted successfully!');
            console.log('Text Value:', component.get('v.textValue'));
            console.log('Date Value:', component.get('v.dateValue'));
            console.log('Email Value:', component.get('v.emailValue'));
            console.log('Radio Value:', component.get('v.radioValue'));
        } else {
            // Error Logic
            alert('Please update the invalid fields before submitting.');
        }
    }
})