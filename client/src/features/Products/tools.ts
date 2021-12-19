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
