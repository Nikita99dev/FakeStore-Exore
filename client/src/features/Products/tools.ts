import { IProducts } from "../../app/Slices/Interfaces/AppInterfaces"

export const fetchAllProductsTool = async <T>(url: any): Promise<T> =>  {
  try {
    const products = await fetch(url)

    if(products.status === 200){
      return products.json()
    } else {
      throw new Error("Something Went Wrong")
    } 
  } catch (error) {
    throw error
  }
}


export const fetchCurrent = async <T>(url: any): Promise<T> =>  {
  console.log(url)
  try {
    const cur = await fetch(url)
    if(cur.status === 200){
      return cur.json()
    } else {
      throw new Error("Something Went Wrong")
    } 
  } catch (error) {
    throw error
  }
}

export const AddProductTool = async <T>(url: any, data: IProducts): Promise<T> =>  {
  console.log(url)
  try {
    const cur = await fetch(url, {
      method:"POST",
      body:JSON.stringify(data)
    }
)
    if(cur.status === 200){
      return cur.json()
    } else {
      throw new Error("Something Went Wrong")
    } 
  } catch (error) {
    throw error
  }
}

export const deleteProdTool = async <T>(url: string): Promise<T> => {
  
  try {
    const deleted = await fetch(url, {
      method: "DELETE"
    })

    if( deleted.status) {
      return deleted.json()
    } else {
      throw new Error("Something Went Wrong")
    } 
  } catch (error) {
    throw error
  }
}


export const editProductTool = async <T>(url: string, body: IProducts): Promise<T> => {
  try {
    const edited = await fetch(url, {
      method:"PUT",
      body:JSON.stringify(body)
    })

    if(edited.status === 200){
      return edited.json()
    } else {
      throw new Error("Something Went Wrong")
    }
  } catch (error) {
    throw error
  }
}
