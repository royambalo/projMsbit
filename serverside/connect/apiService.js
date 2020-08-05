const request = require('request');
let arr=[];
    request('https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json', (error, response,data)=> 
    {
        if (!error && response.statusCode == 200)
        {
          data = JSON.parse(data);
          data.map(item=>{
              if(item.status!=0){
                  if(item.type==1){
                      item=item.fedex
                  }
                  else if(item.type==2){
                      item=item.ups[0]
                  }
                 let obj={
                         id: item.id,
                         name:item.name,
                         description:item.description,
                         url:item.thumbnailUrl
                  }
                  arr.push(obj)
              }
          })
          
        }
    })

exports.arr=arr