export interface Segment {
  id : number;
  name: string;
  tax: number;
  isActive: boolean;
  created: any;
  updated: any;
}
export interface SegmentPost {  
  name: string;
  tax: number;  
}
export interface SegmentPut { 
  name: string;
  tax: number;  
  isActive: boolean;
}