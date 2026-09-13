/* ChildComponentController.js */
({
    fireComponentEvent : function(component, event, helper) {
        // 2. Get the registered event instance using the 'name' attribute
        var compEvent = component.getEvent("childMessageEvent");
        
        // 3. Set the event parameters (the data payload)
        compEvent.setParams({
            "messageText" : component.get("v.userInput")
        });
        
        // 4. Fire the event
        compEvent.fire();
    }
})