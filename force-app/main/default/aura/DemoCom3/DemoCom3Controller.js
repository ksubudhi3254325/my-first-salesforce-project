({
    doInit : function(component, event, helper) {
		component.set("v.message1","Button1 initialized");
        component.set("v.message2","Button2 initialized");
	},
    
	handleClick1 : function(component, event, helper) {
		//component.set("v.message1","Button1 is clicked");
		var buttonLabel = event.getSource().get("v.label");
        if(buttonLabel=="ClickMe1"){
			event.getSource().set("v.label","UnClick");
			component.set("v.message1",event.getSource().get("v.label"));
        }else{
            event.getSource().set("v.label","ClickMe1");
			component.set("v.message1",event.getSource().get("v.label"));
            
        }
	},
    
    handleClick2 : function(component, event, helper) {
		component.set("v.message2","Button2 is clicked");
	}
})