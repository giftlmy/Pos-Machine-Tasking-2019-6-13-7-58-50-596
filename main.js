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
function generateReciptItems(codes){
    let countproducts=countProducts(codes);
    let db=createcodes();
    let result=[];
    // for (let index = 0; index < countproducts.length; index++) {
    //     let fetchproduct=fetchProduct(countproducts[index].key,db)
    //     result.push({
    //         name:fetchproduct.name,
    //         price:fetchproduct.price,
    //         count:countproducts[index].count
    //     })    
    // }
    countproducts.forEach(function(cc){
        let fetchproduct=fetchProduct(cc.key,db)
            result.push({
                name:fetchproduct.name,
                price:fetchproduct.price,
                count:cc.count
            })    
    })
    return result;
}
function countTotalPriceInput(reciptItems){
    let total=0;
    reciptItems.forEach(function(value){
         let price=value.count*value.price;
         total=total+price;
    })
    return total;

}
function assemble(reciptItems,total){
   let str=
   "Receipts\n"+
   "------------------------------------------------------------\n"
   reciptItems.forEach(function(value){
       str = str +
       value.name+"       "+value.price+"       "+value.count+"\n";
   })
   str =str+
   "------------------------------------------------------------\n"+
   "Price:"+total;
   return str;
}
module.exports = {createcodes,countProducts,fetchProduct,generateReciptItems,countTotalPriceInput,assemble};