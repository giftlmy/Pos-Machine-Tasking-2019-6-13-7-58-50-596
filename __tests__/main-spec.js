const  {createcodes,countProducts,fetchProduct,generateReciptItems,countTotalPriceInput,assemble} = require('../main');

it ('should countProducts', () => {
    //given
    let codes=['0001', '0003', '0005', '0003'];
    //when
    let result=countProducts(codes);
    //then
    expect(result[0].count).toBe(1);
});
it ('should fetchProduct', () => {
    //given
    let codes=createcodes();
    let id='0001';
    //when
    let result=fetchProduct(id,codes);
    //then
    expect(result.name).toBe("Coca Cola");
    expect(result.price).toBe(3);
});
it ('should generateReciptItems', () => {
    //given
    let codes=['0001', '0003', '0005', '0003'];
    let result=generateReciptItems(codes);
    console.log("generateReciptItems:",result);
});
it ('should countTotalPriceInput', () => {
    //given
    let codes=['0001', '0003', '0005', '0003'];
    let result=generateReciptItems(codes);
    let price=countTotalPriceInput(result);
    console.log("countTotalPriceInput:",price);
});//assemble
it ('should assemble', () => {
    //given
    let codes=['0001', '0003', '0005', '0003'];
    let ReciptItems=generateReciptItems(codes);
    let price=countTotalPriceInput(ReciptItems);
    let result=assemble(ReciptItems,price);
    console.log("assemble:",result);
});