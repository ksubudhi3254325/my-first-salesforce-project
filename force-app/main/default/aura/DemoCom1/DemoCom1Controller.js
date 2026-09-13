({
	doInit : function(component, event, helper) {
        //component.set("v.Var1", "Demo value from controller component");
        
        var data = {'name': "Rohit Sarma",
                    'email': 'rohit12@gmail.com'};
        component.set('v.jsObject', data);
        
        component.set('v.userData', {
            'myString1' : 'StringValue1',
            'myInteger1' : 12
        });
	}
})