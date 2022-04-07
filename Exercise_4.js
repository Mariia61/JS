let products = [
    { product: "Shirt", price: 10 },
    { product: "Laptop", price: 2400 },
    { product: "Bike", price: 450 },
    { product: "Chair", price: 150 },
    { product: "Phone", price: 1500 },
    { product: "Shoes", price: 60 },
    { product: "Car", price: 25000 },
    { product: "Coffe Machine", price: 500 }
];
let sum_items = 0;

console.log("");
console.log("Item - Category: ");
console.log("--------------------------------------------------------------------")
console.log("");

for (let i = 0; i < products.length; i++) {
    if (products[i].price >= 0 & products[i].price <= 100) {
        products[i].category = "Cheap";
        sum_items = sum_items + products[i].price;
    }
    else if (products[i].price >= 100 & products[i].price <= 500) {
        products[i].category = "Normal";
        sum_items = sum_items + products[i].price;
    }
    else if (products[i].price >= 500 & products[i].price <= 3000) {
        products[i].category = "Expensive";
        sum_items = sum_items + products[i].price;
    }
    else if (products[i].price > 3000) {
        products[i].category = "Fancy";
        sum_items = sum_items + products[i].price;
    }

}


for (let p = 0; p < products.length; p++) {
    console.log(products[p].product + " - " + products[p].category);
}

console.log("");
console.log("Sum of all items:");
console.log("--------------------------------------------------------------------")
console.log(sum_items);
/*
Обсег на всяка категория:
    Евтини 0 - 100
    Нормална цена 100 - 500
    Скъпи 500 - 3000
    Много скъпи 3000+
*/
