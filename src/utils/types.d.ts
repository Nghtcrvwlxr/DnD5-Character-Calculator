export interface Race {
    index: string;
    name: string;
}

export interface Class {
    index: string;
    name: string;
}

export interface Background {
    index: string;
    name: string;
}

export interface Attribute {
    index: string;
    name: string;
    value: number;
    modifier: string;
}

interface CardPageProps {
    fieldKey: string;
    fetchData?: Function;
    label?: string;
}