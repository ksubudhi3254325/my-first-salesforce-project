trigger AccountTrigger on Account (before insert, before update, after insert) {
  
    /* if(Trigger.isBefore){ 
        if (Trigger.isInsert){
         	AccountTriggerHandler.ValidateAccountNameOnInsert(Trigger.new);
        }
        
       if (Trigger.isUpdate){
         	AccountTriggerHandler.ValidateAccountNameOnUpdate(Trigger.newMap, Trigger.oldMap);
        }
    }
  */
    
    if(Trigger.isAfter){
       if (Trigger.isInsert){
       	 /*	
           AccountTriggerHandler.createContactAsynchronously(Trigger.newMap.keySet());
		*/
           AccountTriggerQueueable queueable = new AccountTriggerQueueable(Trigger.newMap.keySet());
           System.enqueueJob(queueable);
       }
       
    }
}