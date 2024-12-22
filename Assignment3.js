// Assignment3.js 
// =============

// 1. Grouping Total Sales by Each Salesperson
const sales = [
  { region: "North", salesperson: "Alice", sales: 200 },
  { region: "South", salesperson: "Bob", sales: 300 },
  { region: "North", salesperson: "Alice", sales: 150 },
  { region: "East", salesperson: "Charlie", sales: 400 },
  { region: "South", salesperson: "Bob", sales: 250 },
];

function groupSalesBySalesperson(sales){
  return sales.reduce((acc,{salesperson, sales}) => {
    acc[salesperson] = (acc[salesperson] || 0) + sales;
    return acc;
  }, {});
}

console.log(groupSalesBySalesperson(sales));
// Output: { Alice: 350, Bob: 550, Charlie: 400 }


// 2. Deep Nested Object Manipulation
const data = {
  user: {
    id: 1,
    name: "John",
    addresses: [
      { type: "home", city: "New York" },
      { type: "work", city: "San Francisco" },
    ],
  },
};

function updateWorkCity(obj, newCity) {
  const updatedData = JSON.parse(JSON.stringify(obj));
  const workAddress = updatedData.user.addresses.find((addr) => addr.type === "work");
  if (workAddress) {
    workAddress.city = newCity;
  }
  return updatedData;
}

console.log(updateWorkCity(data, "Los Angeles"));
/* Output:
{
  user: {
    id: 1,
    name: "John",
    addresses: [
      { type: "home", city: "New York" },
      { type: "work", city: "Los Angeles" }
    ]
  }
}
*/



// 3. Finding and Counting
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "Shoes", category: "Fashion", price: 50 },
  { id: 3, name: "Phone", category: "Electronics", price: 500 },
  { id: 4, name: "T-shirt", category: "Fashion", price: 20 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];

function analyzeProducts(products) {
  const electronics = products.filter((product) => product.category === "Electronics");
  const fashionCount = products.filter((product) => product.category === "Fashion").length;
  const mostExpensiveProduct = products.reduce((max, product) => (product.price > max.price ? product : max), products[0]);

  return {
    electronics,
    fashionCount,
    mostExpensiveProduct,
  };
}

console.log(analyzeProducts(products));
/* Output:
{
  electronics: [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 3, name: "Phone", category: "Electronics", price: 500 },
    { id: 5, name: "Headphones", category: "Electronics", price: 150 }
  ],
  fashionCount: 2,
  mostExpensiveProduct: { id: 1, name: "Laptop", category: "Electronics", price: 1000 }
}
*/



// 4. Complex Object Filtering
const dataset = [
  { id: 1, name: "Alice", tags: ["admin", "editor"] },
  { id: 2, name: "Bob", tags: ["editor"] },
  { id: 3, name: "Charlie", tags: ["admin", "viewer"] },
  { id: 4, name: "David", tags: ["viewer"] },
];

function filterByTags(data, requiredTags) {
  return data.filter((item) => requiredTags.every((tag) => item.tags.includes(tag)));
}

console.log(filterByTags(dataset, ["admin", "editor"]));
// Output: [ { id: 1, name: "Alice", tags: ["admin", "editor"] } ]

