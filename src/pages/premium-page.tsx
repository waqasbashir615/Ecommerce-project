// // src/pages/product-page.tsx
// import { Card, CardContent } from "@/components/ui/card";
// import { useParams, useNavigate } from "react-router-dom";
// // import { products } from "@/data/products";

// const ProductPage = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const product = products.find(p => p.id === Number(id));

//   if (!product) {
//     return (
//       <div className="container mx-auto py-12 px-4 text-center">
//         <h1 className="text-2xl font-bold">Product not found</h1>
//         <button
//           onClick={() => navigate("/")}
//           className="mt-4 bg-black text-white px-4 py-2 rounded-lg"
//         >
//           {/* Back to Home */}
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <button 
//           onClick={() => navigate(-1)}
//           className="mb-4 text-sm text-gray-600 hover:text-black flex items-center"
//         >
//           ← Back to products
//         </button>
//         <Card className="rounded-xl overflow-hidden">
//           <CardContent className="p-0">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="h-96 md:h-auto">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div className="p-6 space-y-6">
//                 <h1 className="text-3xl font-bold">{product.name}</h1>
//                 <p className="text-2xl font-semibold">{product.price}</p>
//                 <div className="pt-4">
//                   <button
//                     className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
//                     onClick={() => {
//                       alert(`${product.name} added to cart!`);
//                     }}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;