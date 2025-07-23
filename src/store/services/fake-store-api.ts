import { api } from "./core"; // core.ts must have baseQuery setup (see below)

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
    // ✅ Login User
    loginUser: build.mutation<LoginResponse, LoginPayload>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // ✅ GET All Products
    getProducts: build.query<Product[], void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    // ✅ GET Product by ID
    getProductById: build.query<Product, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Product", id }],
    }),

    // ✅ POST Product
    postProduct: build.mutation<Product, Partial<Product>>({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),

    // ✅ PUT Product
    editProduct: build.mutation<
      Product,
      { id: number; product: Partial<Product> }
    >({
      query: ({ id, product }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),

    // ✅ DELETE Product
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
} = fakeStoreApi;
