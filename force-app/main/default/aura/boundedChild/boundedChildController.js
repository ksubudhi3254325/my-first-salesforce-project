({
	updateChildVar : function(component, event, helper) {
		component.set("v.childVar", "updated child attribute");
	},
    onChildVarChange : function(component, event, helper) {
		console.log('Child value has changed');
        console.log('Old value'+event.getParam('oldValue'));
        console.log('New value'+event.getParam('value'));
	}
})