import { LightningElement } from 'lwc';

export default class DataBindingQuerySelecter extends LightningElement {

    greeting = 'Hello World';

    handleGreetingChange(event) {
        // alert(this.template.querySelector('lightning-input').value);
        this.greeting = this.template.querySelector('lightning-input').value;
    }
}