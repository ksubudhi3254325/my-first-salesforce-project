/* ReceiverComponentController.js */
({
    handleBroadcast : function(component, event, helper) {
        // 1. Retrieve the parameters from the event
        var message = event.getParam("sharedMessage");
        
        // 2. Update the local UI state
        component.set("v.receivedData", message);
    }
})