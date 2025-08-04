import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IMAGES from "@/assets/images";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return setError("Email is required");

    toast.success(
      `If this were real, a reset link would be sent to: ${email}`
    );
    setEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:block md:w-1/2 bg-gray-200">
          <img
            src={IMAGES.LOGINPAGE}
            alt="Forgot Password Visual"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 sm:p-8 bg-white">
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-center">
                FORGOT PASSWORD
              </CardTitle>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Enter your email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    className={`focus-visible:ring-gray-900 ${
                      error ? "border-red-500" : ""
                    }`}
                  />
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                >
                  SEND RESET LINK
                </Button>
              </CardContent>
            </form>

            <CardFooter className="flex flex-col space-y-4 pt-4" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
