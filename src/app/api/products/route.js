// app/api/products/route.js

// export async function GET(request) {
//     const dummyData = [
//       { id: 1, name: "Product 1", price: 100 },
//       { id: 2, name: "Product 2", price: 200 },
//       { id: 3, name: "Product 3", price: 300 }
//     ];
  
//     return new Response(JSON.stringify(dummyData), {
//       status: 200,
//       headers: { "Content-Type": "application/json" }
//     });
//   }
export async function GET() {
  const dummyData = [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
      { id: 3, name: "Product 3", price: 300 }
  ];

  return new Response(JSON.stringify(dummyData), {
      status: 200,
      headers: { "Content-Type": "application/json" }
  });
}
