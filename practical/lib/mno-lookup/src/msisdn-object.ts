
/**
 * Integrated Services Digital Network
 */
export class Msisdn {

    _isValid: boolean = false;
    value: string = '';

    constructor(numberString: string) {
        this.value = numberString;
        
        this.noMoreThan15Characters();
        
    }

    private noMoreThan15Characters() {
        if(this.value.length > 15) {
            throw new Error("The ITU-T recommendation E.164 limits the maximum length of an MSISDN to 15 digits");
        }

        return this;
    }

    public getLmnos() {
        
    }

}