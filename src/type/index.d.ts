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

declare type Product = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
};
