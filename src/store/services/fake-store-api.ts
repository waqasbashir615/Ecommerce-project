// fake-store-api.ts
import { api } from "./core";

// ===== TYPES =====
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

// ===== API ENDPOINTS =====
export const fakeStoreApi = api.injectEndpoints({
  endpoints: (build) => ({
    // ✅ Login
    loginUser: build.mutation<LoginResponse, LoginPayload>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // ✅ Get all products
    getProducts: build.query<Product[], void>({
      query: () => "/products",
      providesTags: ["Product"],
    }),

    // ✅ Get product by ID
    getProductById: build.query<Product, number>({
      query: (id) => `/products/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Product", id }],
    }),

    // ✅ Get all categories
    getCategories: build.query<string[], void>({
      query: () => "/products/categories",
    }),

    // ✅ Get products by category
    getProductsByCategory: build.query<Product[], string>({
      query: (category) => `/products/category/${category}`,
      providesTags: (_result, _error, category) => [{ type: "Product", id: category }],
    }),

    // ✅ Post product
    postProduct: build.mutation<Product, Partial<Product>>({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),

    // ✅ Edit product
    editProduct: build.mutation<Product, { id: number; product: Partial<Product> }>({
      query: ({ id, product }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),

    // ✅ Delete product
    deleteProduct: build.mutation<void, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
  overrideExisting: false,
});

// ===== EXPORTED HOOKS =====
export const {
  useLoginUserMutation,
  useGetProductsQuery,
  useGetProductByIdQuery,
  usePostProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} = fakeStoreApi;
