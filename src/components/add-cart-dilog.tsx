import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const AddCartDialog = ({
  triggerLabel,
  childrens,
  title,
  description,
  backgroundColor = "white",
  buttonBg = "bg-white text-black",
}: {
  triggerLabel: string;
  title?: string;
  description?: string;
  childrens: React.ReactNode;
  backgroundColor?: string;
  buttonBg?: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`${buttonBg} py-1 text-md font-medium transition-colors rounded-full`}
        >
          {triggerLabel}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-[500px] lg:max-w-[300px]   bg-gray-50 rounded-none shadow-lg h-fit p-0 m-0"
        style={{ backgroundColor }}
        showCloseButton={false}
      >
        <DialogClose asChild>
          <button
            className="absolute -top-4 -right-4 bg-black text-white text-2xl shadow p-1 cursor-pointer transition"
            aria-label="Close"
          >
            <X />
          </button>
        </DialogClose>

        {(title || description) && (
          <div className="px-6 pt-6">
            {title && (
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            )}
            {description && (
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            )}
          </div>
        )}

        <div className="m-0 p-0">{childrens}</div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCartDialog;