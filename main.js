function createcodes(){
    let codes=[
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ];
    return codes;

}
function countProducts(codes){
    let map=new Map;
    let result=[];
    for(let i=0;i<codes.length;i++){
       if(map.get(codes[i])==null){
           map.set(codes[i],1);
       }else{
           map.set(codes[i],map.get(codes[i])+1);
       }
    }
    map.forEach(function(value,key){
       result.push({key:key,count:value})
    })
    return result; 
}

function fetchProduct(code,db){
    for (let index = 0; index < db.length; index++) {
        if(db[index].id===code)
             return{
                 price:db[index].price,
                 name:db[index].name

             }
    }

}

module.exports = {createcodes,countProducts,fetchProduct};