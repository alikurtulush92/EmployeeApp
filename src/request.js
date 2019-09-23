export class Request{
   constructor(){
     this.url = 'http://localhost:3000/employees'
   }
  async get(){
     const response = await fetch(this.url)
     const data = await response.json()
     return data

   }
   async post(data)
   {
     const response  = await fetch(this.url,{
       method:'POST',
       body:JSON.stringify(data),
       headers:{
         "Content-Type":"application/json; charset=UTF-8"
       }
     })
     const responseData = await response.json()
     console.log(responseData);
     return responseData;
   }
   async put(id,data)
   {
     const response  = await fetch(this.url+'/'+id,{
       method:'PUT',
       body:JSON.stringify(data),
       headers:{
         "Content-Type":"application/json; charset=UTF-8"
       }
     })
     const responseData = await response.json()

     return responseData
   }
   async delte(id)
   {
     const response  = await fetch(this.url+'/'+id,{
       method:'DELETE'

     })


     return 'Deleted data'
   }

}
