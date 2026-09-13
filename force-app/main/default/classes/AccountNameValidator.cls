public class AccountNameValidator {
	
    private String accountName;
    
	// Constructor
	public AccountNameValidator(String accountName) {
    	this.accountName = accountName;
	}
	
    public Boolean validate() {
   		return accountName != null && accountName.startsWith('ABC - ');
	}

}