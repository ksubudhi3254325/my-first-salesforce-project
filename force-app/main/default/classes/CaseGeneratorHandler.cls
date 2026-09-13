public class CaseGeneratorHandler {
    
    //Generate cases from platform event case_generator_e
    public static void generateCases(List<Case_Generator__e> gens){
        System.debug('generateCases start');
        Case_Generator_Setting__mdt typesetting = [SELECT Default_Value__c 
                                                   from Case_Generator_Setting__mdt 
                                                   where Label = 'Type' 
                                                   LIMIT 1];
        Case[] newcase = new Case[]{};
        
		for(Case_Generator__e gen : gens) {
            System.debug('Case generator details '+gen.Subject__c+'--'+gen.Description__c+'--'+typesetting.Default_Value__c);    
            newcase.add(new Case(Subject = gen.Subject__c,
                                Description = gen.Description__c,
                                Type = typesetting.Default_Value__c));
        
		}
        insert newcase;
        System.debug('generateCases end');
        
    }
}