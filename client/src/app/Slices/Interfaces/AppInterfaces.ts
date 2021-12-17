export interface IProducts {
  id:number
  title:string,
  price:string,
  category:string,
  description:string,
  image:string
}


export interface IInitState {
  products: IProducts[],
  isLoading: boolean,
  error: null | string
}
