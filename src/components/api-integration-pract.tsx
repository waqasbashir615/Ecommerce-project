// src/components/ApiIntegrationPract.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useGetProductsQuery } from "@/store/services/fake-store-api";

const ApiIntegrationPract: React.FC = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  if (isError || !products) {
    return (
      <p className="text-center text-red-500 font-semibold">
        Failed to load products.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <Card key={product.id}>
          <CardContent className="p-4 space-y-3">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mx-auto"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-muted-foreground">
              ${product.price.toFixed(2)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ApiIntegrationPract;
