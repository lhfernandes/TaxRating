export interface ConverterTaxPost{
    amount:number;
    symbol:string;
    segment:number; 
}

export interface ConverterTaxGet{
    amount:number;
    symbol:string;
    segment:number; 
    valConverted:number;
    txConversion:number;
    txSegment:number;
}