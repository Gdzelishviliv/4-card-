// დავალება N1

const productsFeatures = {
    name: 'Product X',
    description: 'A high-quality product with many features.',
    price: 100
};

const productProperties = {
    color: 'red',
    size: 'medium',
    weight: 5
};
const combinedProduct = {
    ...productsFeatures,
    ...productProperties
};
console.log(combinedProduct);

// დავალება N2

const products = [
    {
        name: "Product X",
        description: "A high-quality product with many features.",
        price: 100
    },
    {
        name: "Product Y",
        description: "Another great product with a competitive price.",
        price: 75
    },
    {
        name: "Product Z",
        description: "A basic product that gets the job done.",
        price: 50
    }
];

const productPrices = products.map(product => product.price);
const totalPrice = productPrices.reduce((sum, price) => sum + price, 0);

console.log(totalPrice);
// დავალება N3

const products3 = [
    { name: "Laptop", price: 1299 },
    { name: "Phone", price: 499 },
    { name: "Tablet", price: 299 },
    { name: "Watch", price: 199 },
    { name: "Headphones", price: 99 },
];
const filtered =products3.filter(product=>product.price>240);
console.log(filtered);


// დავალება N4

const numbers = [33, 10, 99, 95];
function getTripleNumbers(arr) {
    const tripleNumbers = arr.map(number=>number*3);
    return tripleNumbers;
}
const result= getTripleNumbers(numbers);
console.log(result);