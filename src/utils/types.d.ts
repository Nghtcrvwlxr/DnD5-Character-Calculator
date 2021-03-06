export interface Race extends Record<string, any> {
    index: string;
    name: string;
    bonusStats: Record<string, number>;
    proficiencies: Record<string, any>;
}

export interface Class extends Record<string, any> {
    index: string;
    name: string;
    proficiencies: Record<string, any>;
}

export interface Background extends Record<string, any> {
    index: string;
    name: string;
    proficiencies: Record<string, any>;
}

export interface Attribute extends Record<string, any> {
    index: string;
    name: string;
    value: number;
    modifier: number;
}

export interface Skill extends Record<string, any> {
    index: string;
    name: string;
}

export interface Tool extends Record<string, any> {
    index: string;
    name: string;
}

export interface Language extends Record<string, any> {
    index: string;
    name: string;
}
