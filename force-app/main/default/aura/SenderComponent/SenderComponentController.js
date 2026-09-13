/* SenderComponentController.js */
({
    broadcastEvent : function(component, event, helper) {
        // 1. Get the global application event instance using $A.get()
        var appEvent = $A.get("e.c:AppDataEvent");
        
        if (appEvent) {
            // 2. Set the data parameters
            appEvent.setParams({
                "sharedMessage" : component.get("v.txtInput")
            });
            
            // 3. Fire the event globally
            appEvent.fire();
        }
    }
})