public with sharing class ContactControllerForLWC {
    
    //public ContactControllerForLWC() {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String accId) {
        try{
            return [
                SELECT AccountId, Id, FirstName, LastName, Phone 
                FROM Contact 
                WHERE AccountId =: accId
                WITH USER_MODE
                
            ];  

        }Catch(Exception e){
            throw new AuraHandledException('Error in getContacts: ' + e.getMessage());
        }   
        
        
    }
}