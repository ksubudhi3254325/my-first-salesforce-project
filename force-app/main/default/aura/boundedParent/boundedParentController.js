({
	updateParentVar : function(component, event, helper) {
		component.set("v.parentVar", "Updated parent attribute");
	},
    onParentVarChange : function(component, event, helper) {
		console.log('Parent value has changed');
        console.log('Old value'+event.getParam('oldValue'));
        console.log('New value'+event.getParam('value'));
	}
})