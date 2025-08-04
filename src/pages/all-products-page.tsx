// // src/pages/all-products.tsx
// import { Card, CardContent } from "@/components/ui/card";
// import { Link } from "react-router-dom";
// import { products } from "@/data/products";

// const AllProductsPage = () => {
//   return (
//     <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-3xl font-bold mb-8">All Products</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//         {products.map((product) => (
//           <Link key={product.id} to={`/products/${product.id}`}>
//             <Card className="rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
//               <CardContent className="p-4 space-y-3">
//                 <div className="relative h-48 w-full overflow-hidden rounded-lg">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <div className="pt-2">
//                   <h3 className="font-bold text-gray-900">{product.name}</h3>
//                   <p className="text-gray-500 font-semibold">{product.price}</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProductsPage;