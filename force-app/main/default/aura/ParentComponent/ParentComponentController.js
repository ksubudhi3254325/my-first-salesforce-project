/* ParentComponentController.js */
({
    handleChildEvent : function(component, event, helper) {
        // 3. Retrieve the parameters passed by the event
        var receivedMessage = event.getParam("messageText");
        
        // 4. Update the parent's attribute with the received data
        component.set("v.messageFromChild", receivedMessage);
    }
})