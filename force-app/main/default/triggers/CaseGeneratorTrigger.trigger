trigger CaseGeneratorTrigger on Case_Generator__e (after insert) {
    System.debug('CaseGeneratorTrigger start');
	CaseGeneratorHandler.generateCases(trigger.New);
    System.debug('CaseGeneratorTrigger end');
}