import { Injectable } from "@angular/core";

@Injectable()
export class PatternService {
    static AddressLine() {
        return /^[A-Za-z0-9 \.\,\/\-\#\&]+$/;
    }
    static City() {
        return /^[A-Za-z0-9 \.]+$/;
    }
    static USAzip() {
        return /^[0-9]+$/;
    }
    static CANzip() {
        return /^[ABCEGHJKLMNPRSTVXY]{1}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/ ;
    }
    static Email() {
        return /^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)?(\.[a-zA-Z]{2,6})$/;
    }
    static AlphaNumeric() {
        return /^[A-Z]$|^([A-Z][0-9][A-Z]?)+$/;
    }
    static Numbers() {
        return /^\d+$/;
    }
    static getAsNumber(inp) {
        inp = inp || '';
        return Number(inp.replace(/\D+/g, ''));
    }
    static Name() {
        return /^[a-z][a-z\d\s-]*$/i;
    }
    static Ssn() {
        return /^(?!(000|666|9))\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
    }
    static businessName() {
        return /^[a-z][a-z\d\.\s-]+$/i;
    }
}