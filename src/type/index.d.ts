declare type HealthCheck = {
  "API Version": string;
  "Postgres Service": string;
  "Vapi Service": string;
};

declare type GlobalState = {
  token: string;
  vapiId: string;
  twilioNumber: string;
  business: {
    id: string;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
  };
};

// declare type Product = {
//   id: string;
//   title: string;
//   price: string;
//   description: string;
//   category: string;
//   image: string;
// };

type ValidatedProduct = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
    validImage: string;
  };

type Product = {
    name: string | undefined;
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
  
type LoginPayload = {
    username: string;
    password: string;
  };
  
type LoginResponse = {
    token: string;
  };