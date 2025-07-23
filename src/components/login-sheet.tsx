/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { useLoginUserMutation } from "@/store/services/fake-store-api"; // 👈 adjust path if needed
import { toast } from "sonner";

interface LoginSheetProps {
  children: React.ReactNode;
}

const LoginSheet = ({ children }: LoginSheetProps) => {
  const [email, setEmail] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");

  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await loginUser({ username: email, password }).unwrap();

      localStorage.setItem("token", res.token); // ✅ save token

      toast.success("Login successful"); // optional feedback
      navigate("/"); // ✅ redirect to homepage
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-96 bg-white flex flex-col"
      >
        <SheetHeader className="border-b border-gray-300">
          <SheetTitle>Log In</SheetTitle>
        </SheetHeader>
        <div className="flex-1 px-4 mt-6 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email / Username
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#4FC1D2]"
              placeholder="mor_2314"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#4FC1D2]"
              placeholder="83r5^_"
            />
            <div className="text-right mt-1">
              <Link
                to="/forgot-password"
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <Button
            onClick={handleLogin}
            disabled={isLoading}
            className="mt-4 w-full bg-white border border-black text-black py-2 rounded-lg hover:bg-black hover:text-white hover:border-black transition-colors"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
          <div className="mt-6 px-4 text-center text-sm">
            <span className="text-gray-600">New customer? </span>
            <Link to="/register" className="text-indigo-600 hover:underline">
              Create your account
            </Link>
          </div>
          <SheetDescription>
            Access your account to view orders, wishlist and more.
          </SheetDescription>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LoginSheet;
