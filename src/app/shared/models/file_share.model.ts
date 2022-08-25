// File Share Models
// name?: type = OPTIONAL
export class FileShare implements FileShareApi {
    id: bigint;

    constructor() {
    }
}

interface FileShareApi {
    id: bigint;
}

export class TraceabilityShareForm {
    emails: string[];
    documentIds: number[];
}