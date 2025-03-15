export interface Dicount {
  id: number;
  productId:number;
  endDate:Date;
  startDate:Date;
  dicountPercentage:number;
  isActive?:boolean;
}
