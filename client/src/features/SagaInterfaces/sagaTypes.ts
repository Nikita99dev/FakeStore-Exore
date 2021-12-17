import { IProducts } from "../../app/Slices/Interfaces/AppInterfaces";

export interface IGeneratorProducts{
  type: string,
  payload: {
    values: IProducts,
  }
}
