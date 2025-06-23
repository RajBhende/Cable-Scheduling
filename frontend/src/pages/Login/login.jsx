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
    setError(""); // Reset error before login

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

        // Navigate based on role
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
    <section className="flex items-center justify-center h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <form onSubmit={handleLogin}>
          <CardBody className="flex flex-col gap-5 p-6">
            <Typography variant="h4" color="blue-gray" className="text-center">
              Sign In
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-center font-normal"
            >
              Enter your email and password to sign in
            </Typography>

            {error && (
              <Typography
                variant="small"
                color="red"
                className="text-center font-medium"
              >
                {error}
              </Typography>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-800">
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="name@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                size="lg"
              />
            </div>

            {/* Password Field with Eye Icon */}
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-800">
                Password
              </label>
              <div className="relative">
                <Input
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  name="password"
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
                className="font-medium text-blue-600 hover:underline"
              >
                Forgot password?
              </Typography>
            </div>
          </CardBody>

          <CardFooter className="pt-0 px-6 pb-6 flex flex-col gap-3">
            <Button type="submit" color="blue" fullWidth>
              Sign In
            </Button>

            <Typography
              variant="small"
              className="text-center text-gray-600 mt-2"
            >
              Need access? Contact admin.
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
