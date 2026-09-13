import { LightningElement } from 'lwc';

export default class DataBindingQuerySelecter2 extends LightningElement {
    firstName = '';
    lastName = '';

    handleGreetingChange(event) {
        //this.firstName = this.template.querySelector('lightning-input[name="firstName"]').value;
        //this.lastName = this.template.querySelector('lightning-input[name="lastName"]').value;

        var inputs = this.template.querySelectorAll('lightning-input');
        inputs.forEach(input => {
            if (input.name === 'firstName') {
                this.firstName = input.value;
            } else if (input.name === 'lastName') {
                this.lastName = input.value;
            }
        });
    }

    get firstName() {
        return this.firstName;
    }

    get lastName() {
        return this.lastName;
    }

}