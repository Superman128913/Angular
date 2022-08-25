// Traceability Models
// name?: type = OPTIONAL

export class Traceability implements TraceabilityAPI {
    id: bigint;
    documents?: Array<any>;

    constructor() {
    }
}

interface TraceabilityAPI {
    id: bigint;
    documents?: Array<TraceabilityDocument>;
}

/**
 * Traceability Document
 */

export class TraceabilityDocument {
    originalFile: File;
    name: string;
    previewSrc: string;
    totalPages: string;
}

export class TraceabilityDocumentUpdateForm {
    partNumber: string;
    serialNumber: string;
    lotNumber: string;
}

export class TraceabilityDocumentRenameForm {
    name: string;
}

/**
 * Traceability Request
 */

export class TraceabilityRequestCreateForm {
    emails: { email: string }[];
    partNumber: string;
    serialNumber?: string;
    lotNumber?: string;
    message: string;
    traceabilityId: bigint;
    userId: bigint;
}

export class TraceabilityRequestUploadForm implements TraceabilityDocument {
    originalFile: File;
    name: string;
    previewSrc: string;
    totalPages: string;
    approved: boolean;
}
