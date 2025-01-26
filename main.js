let a= null;
console.log(typeof a);
const array = ["Bern", "basel","Interlaken"];
console.log(array);
console.log(array[1]);
console.log(array.length);
array[5]= "Lucerne";
array[4] = "Zurich";
console.log(array);
const test = {};
console.log(typeof test)

const cart =  {
    money: {
    sum: 500,
    currensy: 'dollar',
    allowCurrency: ['euro', 'dollar'],
            discount: {
            hasDiscount: true,
            discountValue: 30},
    },
    items: [{
        title: 'Pencil',
        count: 2,
        price: 100}, {
        title: 'book',
        count: 1,
        price: 300
        } ]
}

cart['name'] = 'anton'
console.log(cart);
console.log(cart.money.sum);
console.log(cart.items[1]);
console.log(cart.items[1].title);

            //Operators
    //Arithmetic Operators Арифметические операторы

    const d = 5;
    const b = 2;
    let c = 4;
    console.log(d / b);
    console.log(d % b);
    console.log(d**b);
    c++
    console.log(c);
    c--
    console.log(c);










