// Product Model
// name?: type = OPTIONAL
interface ProductAPI {
    id?: number;
    title?: string;
    description?: string;
    type?: string;
    brand?: string;
    collection?: any[];
    category?: string;
    price?: number;
    sale?: boolean;
    discount?: number;
    stock?: number;
    new?: boolean;
    quantity?: number;
    tags?: any[];
    variants?: Variants[];
    images?: Images[];
    partNumber?: string;
}

export class Product implements ProductAPI {
    id?: number;
    title?: string;
    description?: string;
    type?: string;
    brand?: string;
    collection?: any[];
    category?: string;
    price?: number;
    sale?: boolean;
    discount?: number;
    stock?: number;
    new?: boolean;
    quantity?: number;
    tags?: any[];
    variants?: Variants[];
    images?: Images[];
    partNumber?: string;

    constructor() {
    }
}

export class Prod {
    id: number;
    partNumber: string;
    fscCode: string;
    category: string;
    imageURL: string;
}

export interface Variants {
    variantId?: number;
    id?: number;
    sku?: string;
    size?: string;
    color?: string;
    imageId?: number;
}

export interface Images {
    imageId?: number;
    id?: number;
    alt?: string;
    src?: string;
    variantId?: any[];
}
