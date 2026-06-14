const { Query } = require('node-appwrite');

console.log("Query.limit(5):", JSON.stringify(Query.limit(5)));
console.log("Query.offset(10):", JSON.stringify(Query.offset(10)));
console.log("Query.orderAsc('name'):", JSON.stringify(Query.orderAsc('name')));
