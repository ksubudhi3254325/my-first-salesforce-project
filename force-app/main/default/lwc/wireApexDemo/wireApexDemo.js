import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactControllerForLWC.getContacts';

export default class WireApexDemo extends LightningElement {

    @api recordId;

    @wire(getContacts, { accId: '$recordId' })
    contacts;   // property holds both data and error


}