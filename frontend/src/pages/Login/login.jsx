import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Input,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        if (data.role === "admin") navigate("/admin-dashboard");
        else if (data.role === "client") navigate("/client-dashboard");
        else navigate("/employee-dashboard");
      } else {
        setError(data.msg || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-md shadow-md border border-gray-200">
        <form onSubmit={handleLogin}>
          <CardBody className="flex flex-col gap-4 p-6">
            <Typography variant="h4" color="blue-gray" className="text-center">
              Sign In
            </Typography>
            <Typography variant="small" color="gray" className="text-center">
              Enter your email and password to access your account
            </Typography>

            {error && (
              <Typography variant="small" color="red" className="text-center">
                {error}
              </Typography>
            )}

            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                size="lg"
              />
            </div>

            {/* Password Field with Toggle */}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={passwordShown ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  size="lg"
                  className="pr-12"
                />
                <span
                  onClick={togglePasswordVisiblity}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
                >
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </span>
              </div>
            </div>

            <div className="text-right">
              <Typography
                as="a"
                href="#"
                variant="small"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Typography>
            </div>
          </CardBody>

          <CardFooter className="px-6 pt-0 pb-6">
            <Button type="submit" color="blue" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="text-center text-gray-600 mt-3">
              Need access? Contact admin.
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
