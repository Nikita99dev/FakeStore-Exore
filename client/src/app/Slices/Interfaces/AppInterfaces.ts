export interface IProducts {
  id:number
  title:string,
  price:string,
  category:string,
  description:string,
  image:string
}


export interface IInitState {
  [x: string]: any;
  products: IProducts[],
  isLoading: boolean,
  error: null | string
}
