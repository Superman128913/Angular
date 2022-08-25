// Company Division Models
// name?: type = OPTIONAL
import {CompanyDivisionAddress} from './company_division_address.model';
import {Traceability} from './traceability.model';
import {FileShare} from './file_share.model';

export class CompanyDivision implements CompanyDivisionAPI {
    id: bigint;
    name: string;
    website?: string;
    email?: string;
    phone?: string;
    fax?: string;
    ein?: string;
    dunsNumber?: string;
    cageCode?: string;
    about?: string;
    logoUrl?: string;
    linkedInUrl?: string;
    twitterHandle?: string;
    companyId: bigint;
    addresses: CompanyDivisionAddress[];
    traceability: Traceability;
    fileShare: FileShare;
    // applications
    default?: boolean;
    active?: boolean;

    constructor() {
    }
}

interface CompanyDivisionAPI {
    id: bigint;
    name: string;
    website?: string;
    email?: string;
    phone?: string;
    fax?: string;
    ein?: string;
    dunsNumber?: string;
    cageCode?: string;
    about?: string;
    logoUrl?: string;
    linkedInUrl?: string;
    twitterHandle?: string;
    companyId: bigint;
    addresses: CompanyDivisionAddress[];
    traceability: Traceability;
    fileShare: FileShare;
}

export interface CompanyDivisionRegisterForm {
    name: string;
    website?: string;
    email?: string;
    phone?: string;
    fax?: string;
    ein?: string;
    dunsNumber?: string;
    cageCode?: string;
    about?: string;
    logoUrl?: string;
    linkedInUrl?: string;
    twitterHandle?: string;
    companyId: bigint;
    userId: bigint;
}

export interface CompanyDivisionUpdateForm {
    id: bigint;
    name: string;
    website?: string;
    email?: string;
    phone?: string;
    fax?: string;
    ein?: string;
    dunsNumber?: string;
    cageCode?: string;
    about?: string;
    logoUrl?: string;
    linkedInUrl?: string;
    twitterHandle?: string;
    companyId: bigint;
    userId: bigint;
}
