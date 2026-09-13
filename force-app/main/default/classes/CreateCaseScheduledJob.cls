global class CreateCaseScheduledJob implements Schedulable {
   public void execute(SchedulableContext SC) {
      insert new Case(Subject = 'Scheduled case', Description = 'Scheduled case desc'); 
   }
}