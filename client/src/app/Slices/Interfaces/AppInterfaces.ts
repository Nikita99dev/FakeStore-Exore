export interface IProducts {
  id:number
  title:string,
  price:string,
  category:string,
  description:string,
  image:string,
  navigate?: any
}


export interface IInitState {
  [x: string]: any;
  products: IProducts[],
  current?: IProducts,
  isLoading: boolean,
  error: null | string
}

export interface IInitState2 {
  [x: string]: any;
  products2: IProducts[],
  current?: IProducts,
  isLoading: boolean,
  error: null | string
}
