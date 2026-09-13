trigger OpportunityTrigger on Opportunity (before insert, before update) {
   System.debug('OpportunityTrigger');
    if (Trigger.isInsert){
        System.debug('OpportunityTrigger insert');
        //OpportunityHandler.CalculateTaxOnInsert(Trigger.new);
        OpportunityHandler.QueryBeforeInsert(Trigger.new);
    }
    
   if (Trigger.isUpdate){
       System.debug('OpportunityTrigger update');
        //OpportunityHandler.CalculateTaxOnUpdate(Trigger.new, Trigger.old);
        //OpportunityHandler.CalculateTaxOnUpdate(Trigger.newMap, Trigger.oldMap);
    }
}