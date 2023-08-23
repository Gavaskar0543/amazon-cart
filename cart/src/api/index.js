const customFetch = async (url,{body,...customConfig}) => {

  const headers = {
    'Content-Type':'application/x-www-form-urlencoded',
    ...customConfig.headers
  }
  const config = {
    ...customConfig,
    headers : headers
  }

  if(body){
    let formBody = new URLSearchParams();
    for(const key in body ){
        FormData.append(key,body[key])
    }
    config.body = FormData.toString();
    console.log(config.body);
  }
  try {
    const respone = await fetch(url,config)
    const data = await respone.json();
    if(respone.ok){
        return {
            data:data,
            success:true
        }
    }
    throw new Error(data.message);
  } catch (error) {
  
    console.log(error.message);
    return{
        message:'internal server error',
        success:false;
    }
    
  }
}