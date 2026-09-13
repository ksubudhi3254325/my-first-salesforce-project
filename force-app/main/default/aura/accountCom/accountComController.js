/* 

*/
({
    //This function is called when the Aura component is initialized.
	doInit : function(component, event, helper) {
        
        // Get a reference to the server-side Apex method named "getAccounts".
        // "c.getAccounts" refers to the @AuraEnabled getAccounts method
        // in the Apex controller associated with this Aura component.
        // At this point, the Apex method has NOT been executed yet.
		var action = component.get("c.getAccounts");
        
        // Register a callback function for the Apex action.
        // This callback will execute after Salesforce receives
        // the response from the Apex getAccounts method.
        action.setCallback(this, function(response){
            
             // Get the status of the Apex request.
            // Common states include:
            // SUCCESS    - Apex executed successfully.
            // ERROR      - An error occurred during Apex execution.
            // INCOMPLETE - The request couldn't be completed.
            var state = response.getState();
            
            // Check whether the Apex method executed successfully.
            if(state == "SUCCESS"){
                var accounts = response.getReturnValue();
                console.log("Accounts:", accounts);
                
                // Set the Aura component attribute "accList" 
                // with the Account records returned by Apex.
                component.set("v.accList", accounts);
                
             // Make sure:
             // 1. The errors array exists.
             // 2. At least one error exists in the array.
             }else if (state === "ERROR") {
                var errors = response.getError();
                if (errors && errors[0]) {
                    console.error(
                        "Apex Error:", errors[0].message
                    );
                }
            }
        });
        // Add the Apex action to the Aura framework's action queue.
        // This is the statement that actually schedules the
        // getAccounts Apex method to be sent to the Salesforce server.
        // The sequence is: create action -> register callback -> enqueue action
        $A.enqueueAction(action);
	}
})