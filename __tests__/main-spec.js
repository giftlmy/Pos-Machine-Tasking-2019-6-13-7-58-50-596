const  {createcodes,countProducts,fetchProduct} = require('../main');

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