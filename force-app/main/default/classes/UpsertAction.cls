//This invocable method is being called from a autolaunched flow

global class UpsertAction {
	
    @InvocableMethod(label='Upsert Account' description='Upsert records to database' category='DML')
    global static List<Account> upsertAccount(List<Account> accountsToUpsert){
        upsert accountsToUpsert;
        return accountsToUpsert;
    }
}