({
    handleSearchClick : function(component, event, helper) {
        // 1. Get the raw input string from the component attribute
        var rawInput = component.get("v.searchQuery");
        
        // 2. Delegate the business logic / text transformation to the helper
        var processedText = helper.cleanAndFormatQuery(rawInput);
        
        // 3. Update the component with the results returned by the helper
        component.set("v.formattedQuery", processedText);
    }
})