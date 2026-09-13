import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactControllerForLWC.getContacts';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class WireApexDemo extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD] })
    record;

    @wire(getContacts, { accId: '$recordId' })
    contacts;

    get name() {
        return this.record?.data?.fields?.Name?.value ?? '';
    }
}