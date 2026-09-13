/*
can be called using below
CreateCaseScheduledJob m = new CreateCaseScheduledJob();
String sch = '00 58 22 29 8 ? 2026';
String jobID = System.schedule('CreateCaseScheduledJobJob', sch, m);
*/


global class AccountTriggerQueueable implements Queueable {
    
    global Set<Id> newAccountIds;
    
    global AccountTriggerQueueable(Set<Id> newAccountIds){
        this.newAccountIds = newAccountIds;
        
    }
    
    global void execute(System.QueueableContext context){
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