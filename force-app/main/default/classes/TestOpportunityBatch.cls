/*
can be called by open execute ananymous window
Database.executeBatch(new TestOpportunityBatch());
*/

public class TestOpportunityBatch implements Database.Batchable<sObject>{
	
   private String query = 'SELECT Id, Tax__c, Tax_Percentage__c, Total_Price__c, Amount FROM Opportunity'; 
    
   public Database.QueryLocator start(Database.BatchableContext bc){
      return Database.getQueryLocator(query);
   }

   public void execute(Database.BatchableContext bc, List<Opportunity> scope){
       for(opportunity opp: scope){
           if(opp.Tax_Percentage__c!=null && opp.Amount!=null){
               opp.Tax__c = (opp.Tax_Percentage__c / 100) * opp.Amount;
               opp.Total_Price__c = opp.Amount + opp.Tax__c;
           }
       }
    	update scope;
    }

   public void finish(Database.BatchableContext bc){
       //send email with total number of records updated.
   }
    
}