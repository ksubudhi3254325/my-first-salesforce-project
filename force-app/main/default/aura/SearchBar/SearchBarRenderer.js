({
    // afterRender runs automatically after the component's HTML is injected into the DOM
    afterRender: function(component, helper) {
        // Always call the base framework afterRender first
        this.superAfterRender();
        
        // Find the input element using its aura:id
        var searchInput = component.find("searchField");
        
        if (searchInput) {
            // Focus the input element so the user can type immediately
            searchInput.focus();
            console.log("Renderer successfully focused the search field.");
        }
    }
})