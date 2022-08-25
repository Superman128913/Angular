// Company Division Address Models
// name?: type = OPTIONAL
export class CompanyDivisionAddress implements CompanyDivisionAddressAPI {
    id: bigint;
    address: string;
    additionalAddressDetails?: string;
    city: string;
    zipPostalCode: string;
    stateProvinceCounty: string;
    country: string;
    // formattedAddress: string;

    constructor() {
    }
}

interface CompanyDivisionAddressAPI {
    id: bigint;
    address: string;
    additionalAddressDetails?: string;
    city: string;
    zipPostalCode: string;
    stateProvinceCounty: string;
    country: string;
    // formattedAddress: string;
}

export interface CompanyDivisionAddressRegisterForm {
    address: string;
    additionalAddressDetails?: string;
    city: string;
    zipPostalCode: string;
    stateProvinceCounty: string;
    country: string;
    // formattedAddress: string;
    companyId: bigint;
}

export interface CompanyDivisionAddressUpdateForm {
    id: bigint;
    address: string;
    additionalAddressDetails?: string;
    city: string;
    zipPostalCode: string;
    stateProvinceCounty: string;
    country: string;
    // formattedAddress: string;
}

export interface CompanyDivisionAddressDestroyForm {
    id: bigint;
}
