// import { api } from "./core";

// export type Product = {
//   id: string;
//   title: string;
//   price: string;
//   description: string;
//   category: string;
//   image: string;
// };

// export const productApi = api.injectEndpoints({
//   endpoints: (build) => ({
//     // ✅ GET Products
//     getProduct: build.query<Product[], void>({
//       query: () => ({
//         url: "/Product",
//         method: "GET",
//       }),
//       providesTags: ["Product"],
//       // Optional, you can omit this if not transforming data
//       transformResponse: (response: Product[]) => response,
//     }),

//     // ✅ POST Product
//     postProduct: build.mutation<Product, Partial<Product>>({
//       query: (product) => ({
//         url: "/Product",
//         method: "POST",
//         body: product,
//       }),
//       invalidatesTags: ["Product"],
//     }),

//     // ✅ PUT Product
//     editProduct: build.mutation<
//       Product,
//       { product_id: string; product: Partial<Product> }
//     >({
//       query: ({ product_id, product }) => ({
//         url: `/Product/${product_id}`,
//         method: "PUT",
//         body: product,
//       }),
//       invalidatesTags: ["Product"],
//     }),

//     // ✅ DELETE Product
//     deleteProduct: build.mutation<void, string>({
//       query: (product_id) => ({
//         url: `/Product/${product_id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Product"],
//     }),
//   }),
// });

// export const {
//   useGetProductQuery,
//   usePostProductMutation,
//   useEditProductMutation,
//   useDeleteProductMutation,
// } = productApi;
