/* SignUp.tsx */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Separator } from "@radix-ui/react-select";
import { toast } from "sonner";
import { useLoginUserMutation } from "@/store/services/fake-store-api";

const SignUp = () => {
  const [createUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 10000), // fake id
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", email: "", password: "" };

    if (!formData.username) {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      await createUser(formData).unwrap();
      toast.success("Account created successfully!");
      navigate("/");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:block md:w-1/2 bg-gray-200">
          <img
            src={IMAGES.LOGINPAGE}
            alt="Sign Up Visual"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 sm:p-8 bg-white">
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-center">
                SIGN UP
              </CardTitle>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username *</Label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="waqas_123"
                    value={formData.username}
                    onChange={handleChange}
                    className={`focus-visible:ring-gray-900 ${
                      errors.username ? "border-red-500" : ""
                    }`}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm">{errors.username}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`focus-visible:ring-gray-900 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="your-password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`focus-visible:ring-gray-900 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  disabled={loading}
                >
                  {loading ? "Signing up..." : "SIGN UP"}
                </Button>
              </CardContent>
            </form>

            <CardFooter className="flex flex-col space-y-4 pt-4">
              <Separator className="bg-gray-200" />
              <p className="text-center text-gray-600">
                Already have an account? Login instead.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
