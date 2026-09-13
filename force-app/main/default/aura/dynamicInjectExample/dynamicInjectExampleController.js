({
    injectSubmitButton : function(component, event, helper) {
        // 1. Define the properties, variants, and handlers for the new button
        var buttonAttributes = {
            "aura:id": "dynamicButton",
            "label": "Dynamically Injected Submit",
            "variant": "brand",
            "iconName": "utility:send",
            "onclick": component.getReference("c.handleDynamicSubmitAction") // Binds to a controller function
        };

        // 2. Call the framework utility to build a lightning:button component out of thin air
        $A.createComponent(
            "lightning:button",
            buttonAttributes,
            function(newButton, status, errorMessage) {
                // 3. Callback function executes once processing completes
                if (status === "SUCCESS") {
                    // Find the physical container target div in our markup
                    var container = component.find("buttonContainer");
                    
                    // Clear out anything previously inside it (optional safety step)
                    var currentBody = []; 
                    
                    // Push the newly created button into the body array of the container
                    currentBody.push(newButton);
                    
                    //v.body Modification: Every container component in Aura has a hidden 
                    //v.body attribute which holds an array of its child structures. 
                    //Setting or pushing items into container.set("v.body", array) 
                    //updates what renders inside that layout shell.
                    container.set("v.body", currentBody);
                }else if (status === "INCOMPLETE") {
                    console.error("No response from server or client is offline.");
                }else if (status === "ERROR") {
                    console.error("Error creating component: " + errorMessage);
                }
            }
        );
    },

    // This is the action function bound to the dynamically created button
    handleDynamicSubmitAction : function(component, event, helper) {
        // Increment our state tracker to prove the action works flawlessly
        var currentCount = component.get("v.clickCount");
        component.set("v.clickCount", currentCount + 1);
        
        alert("🚀 Dynamic button clicked! Executing submit action sequence.");
    }
})