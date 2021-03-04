import {alpha, required,compare } from "@rxweb/reactive-form-validators";

export class User {
    @required()
    firstName : string;

    @required()
    lastName : string;

    @required()
    email : string;

    @required()
    adBudget : number;

    @required()
    phone : number;
}