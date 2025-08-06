// components/ProductCard.tsx

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="w-full max-w-[300px] h-[400px] flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="p-4">
        <div className="relative w-full h-48">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-full"
          />
        </div>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col justify-between px-4">
        <div>
          <h3 className="font-semibold text-base line-clamp-2">
            {product.title}
          </h3>
          {product.description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          {product.rating && (
            <span className="text-sm text-yellow-500">
              ★ {product.rating.rate} ({product.rating.count})
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-2">
        <Button className="w-full" variant="secondary">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
