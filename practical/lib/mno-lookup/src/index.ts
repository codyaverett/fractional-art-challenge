import { mnoData } from './mno-data';
export { Msisdn } from './msisdn-object';

export function lookupByMobileOperatorId(mobileOperatorId: string) {
    try {
        return mnoData[mobileOperatorId];
    } catch(e: unknown) {
        throw new Error(`id: ${mobileOperatorId} was not found.`);
    }
}
