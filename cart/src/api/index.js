import { ApiUrls } from "../utils/constants";

const customFetch = async (url, { body, ...customConfig }) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    ...customConfig.headers
  };
  
  const config = {
    ...customConfig,
    headers: headers
  };
  
  if (body) {
    let formBody = new URLSearchParams();
    for (const key in body) {
      formBody.append(key, body[key]); // Fixed variable name from FormData to formBody
    }
    config.body = formBody.toString(); // Fixed variable name from FormData to formBody
  }
  
  try {
    const response = await fetch(url, config); // Fixed variable name from respone to response
    const data = await response.json(); // Fixed variable name from respone to response
    
    if (response.ok) {
      return {
        data: data,
        success: true
      };
    }
    
    throw new Error(data.message);
  } catch (error) {
    
    return {
      message: 'internal server error',
      success: false
    };
  }
};


//getdata
export const productFromDB = () =>{
    return customFetch(ApiUrls.getProducts,{
        method:'GET'
    })
}