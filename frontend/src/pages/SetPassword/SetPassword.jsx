import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Input,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

export default function SetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Extract token from URL when component mounts
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const urlToken = queryParams.get("token");
    if (urlToken) {
      setToken(urlToken);
    } else {
      setMessage("❌ Token not found. Please check your invite link.");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/set-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Password set successfully. Redirecting...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(`❌ ${data.msg}`);
      }
    } catch (error) {
      setMessage("❌ Server error. Please try again.");
      console.error("Set password error:", error);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-5 p-6">
            <Typography variant="h4" className="text-center">
              Set Your Password
            </Typography>

            {message && (
              <Typography
                variant="small"
                color={message.startsWith("✅") ? "green" : "red"}
                className="text-center"
              >
                {message}
              </Typography>
            )}

            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-800">
                New Password
              </label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-800">
                Confirm Password
              </label>
              <Input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </CardBody>

          <CardFooter className="pt-0 px-6 pb-6">
            <Button type="submit" color="blue" fullWidth>
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
