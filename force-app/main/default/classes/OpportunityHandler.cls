public class OpportunityHandler {
	
    //Method to calculate tax
    private static void calculateTax(Opportunity opp){
        opp.Tax__c = (opp.Tax_Percentage__c /100) * opp.Amount;
        opp.Total_Price__c = opp.Tax__c + opp.Amount;
        
    }
    
    //Runs on opportunity before insert
    public static void CalculateTaxOnInsert(List<Opportunity> opportunities){
        System.debug('CalculateTaxOnInsert start');
		for (Opportunity opp : opportunities) {
            if(opp.Tax_Percentage__c!=null && opp.Amount!=null){
                System.debug('Condition satisfield');
                calculateTax(opp);
                System.debug('Tax and Total price'+ opp.Tax__C + ' - ' + opp.Total_Price__c);
            }else{
                System.debug('Condition not satisfield');
            }    
		} 
        System.debug('CalculateTaxOnInsert end');
                                                                             
    }
    
    /*
    public static void CalculateTaxOnUpdate(List<Opportunity> NewO, List<Opportunity> OldO){
       System.debug('CalculateTaxOnUpdate start');

        Integer i = 0;
        for (Opportunity opp : NewO) {
            System.debug('NewO'+NewO);
            System.debug('NewO'+OldO);
            if(opp.Tax_Percentage__c!=null && opp.Amount!=null && 
               (opp.Tax_Percentage__c!=OldO[i].Tax_Percentage__c || opp.Amount!=OldO[i].Amount)){
                System.debug('Condition satisfield');
                opp.Tax__c = (opp.Tax_Percentage__c /100) * opp.Amount;
                opp.Total_Price__c = opp.Tax__c + opp.Amount;
               }else{
                   System.debug('Condition not satisfield');
               }
            
            i++;
		}  
         System.debug('CalculateTaxOnUpdate end');
    }
 	*/
    
    public static void CalculateTaxOnUpdate(Map<id, Opportunity> NewO, Map<id, Opportunity> OldO){
        System.debug('CalculateTaxOnUpdate start');
        for(id oppid : NewO.keySet()){
            Opportunity newRecord = NewO.get(oppid);
            Opportunity oldRecord = OldO.get(oppid);
            
             if(newRecord.Tax_Percentage__c!=null && newRecord.Amount!=null && 
               (newRecord.Tax_Percentage__c!=oldRecord.Tax_Percentage__c || newRecord.Amount!=oldRecord.Amount)){
                System.debug('Condition satisfield');
                calculateTax(NewO.get(oppid));
             }else{
                   System.debug('Condition not satisfield');
             }
        }
        
		System.debug('CalculateTaxOnUpdate end');
			
    }

	public static void QueryBeforeInsert(List<Opportunity> opportunities){
        System.debug('QueryBeforeInsert start');
        Set<id> accountids = new Set<id>();
		for (Opportunity opp : opportunities) {
            accountids.add(opp.AccountId);            
		} 
        List<Account> parentaccounts = [SELECT id, Name, Phone, Active__c, (SELECT id, FirstName, LastName from Contacts),
                                        Parent.Name, Parent.Phone
                        				FROM Account
                        				WHERE id IN : accountids];
        System.debug(parentaccounts);
        System.debug(parentaccounts[0].Contacts);
        
        System.debug(parentaccounts[0].Parent);
        
        //List<Contact> contacts = parentaccounts[0].Contacts;
        
        //System.debug(contacts);
        
        System.debug('QueryBeforeInsert end');
                                                                             
    }

    
}