import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import React from "react";

interface Crumb {
  label: string;
  to?: string; 
}

interface GenBreadcrumbProps {
  items: Crumb[];
  className?: string;
}

const GenBreadcrumb = ({ items, className = "" }: GenBreadcrumbProps) => {
  return (
    <Breadcrumb className={`text-sm  ${className}`}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.to ? (
                  <BreadcrumbLink asChild>
                    <Link
                      to={item.to}
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="font-semibold text-primary">
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default GenBreadcrumb;