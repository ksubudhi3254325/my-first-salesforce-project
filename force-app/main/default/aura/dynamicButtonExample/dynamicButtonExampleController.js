({
    handleDynamicClick : function(component, event, helper) {
        // 1. Identify which configuration the user is currently targeting
        var currentAction = component.get("v.actionType");
        
        // 2. Perform conditional business logic execution based on that state
        switch(currentAction) {
            case "Save":
                // Handle Saving Logic (e.g., Calling an Apex controller, showing a toast)
                alert('💾 Save processing... Data pushed safely to database.');
                component.set("v.isProcessed", true);
                break;
                
            case "Delete":
                // Handle Deletion Confirmation Logic
                var confirmDelete = confirm('⚠️ Are you completely sure you want to delete this theoretical record?');
                if(confirmDelete) {
                    alert('🗑️ Record successfully removed.');
                    component.set("v.actionType", "Select"); // Reset back to default state
                }
                break;
                
            case "Reset":
                // Handle resetting component attributes
                alert('🔄 Resetting parameters back to initial state.');
                component.set("v.isProcessed", false);
                component.set("v.actionType", "Select");
                break;
                
            default:
                console.error("Unknown button action state reached.");
        }
    }
})