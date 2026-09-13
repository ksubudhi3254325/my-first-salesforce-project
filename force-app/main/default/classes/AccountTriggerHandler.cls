public class AccountTriggerHandler {
	//Runs on opportunity before insert
    public static void ValidateAccountNameOnInsert(List<Account> accounts){
       
        System.debug('start');
		for(Account acc : accounts) {
            AccountNameValidator accVal = new AccountNameValidator(acc.Name);
            if(!accVal.validate()){
                throw new CustomException('Account name always should be prepend with \'ABC - \'');
            } 
		}
	 	
    }
    
    
    public static void ValidateAccountNameOnUpdate(Map<id, Account> NewA, Map<id, Account> OldA){
        System.debug('Validate Update start');
        for(id accid : NewA.keySet()){
            Account newRecord = NewA.get(accid);
            Account oldRecord = OldA.get(accid);
            
            if(newRecord.Name!=oldRecord.Name){
                AccountNameValidator accVal = new AccountNameValidator(newRecord.Name);
                if(!accVal.validate()){
                    throw new CustomException('Account name always should be prepend with \'ABC - \'');
                } 
            }    
			
    	}
    } 
    
    //This is create afterinsert trigger of account asynchronously
    @Future
    public static void createContactAsynchronously(Set<Id> newAccountids){   
        // Perform some operations
        Integer count = 1;
        List<Contact> newContacts = new  List<Contact>();
        for(Id accountid : newAccountids){
            newContacts.add(new Contact(FirstName = 'TestFirst'+ count,
                                       LastName = 'TestLast'+ count,
                                       AccountId = accountid));
            count++;
        }
        insert newContacts;
        
    }

}