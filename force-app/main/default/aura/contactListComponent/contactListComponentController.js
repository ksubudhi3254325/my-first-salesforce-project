({
	doInit : function(component, event, helper) {
		component.set("v.Columns",[
            {label: "First Name", fieldName:"FirstName", type:"text"},
        	{label: "Last Name", fieldName:"LastName", type:"text"},
            {label: "Email", fieldName:"Email", type:"email"},
            {label: "Phone", fieldName:"Phone", type:"phone"}
        ]);
        
        var action = component.get("c.getContacts");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
             if(state == "SUCCESS"){
                var contacts = response.getReturnValue();
                console.log("Contacts:", contacts);
                component.set("v.Contacts", contacts);
             }else if (state === "ERROR") {
                var errors = response.getError();
                if (errors && errors[0]) {
                    console.error(
                        "Apex Error:", errors[0].message
                    );
                }
            }
        });
         $A.enqueueAction(action);
	}
})