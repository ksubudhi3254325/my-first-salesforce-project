import { LightningElement, api } from 'lwc';

export default class CounterCard extends LightningElement {
    // PUBLIC PROPERTY: Accessible from parent components using @api
    //@api 
    cardTitle = 'Default Counter';

    // PRIVATE PROPERTY: Local scope, only used inside this component
    count = 0;

    // Handle button click (internal private logic)
    incrementCount() {
        this.count += 1;
    }
}