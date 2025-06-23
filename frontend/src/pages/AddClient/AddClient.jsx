import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function AddClient() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleInvite = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/send-invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Invitation sent successfully!");
        setEmail("");
      } else {
        setError(data.msg || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error sending invite:", err);
      setError("⚠️ Server error. Please try again later.");
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <form onSubmit={handleInvite}>
          <CardBody className="flex flex-col gap-6 p-6">
            <Typography variant="h5" className="text-center text-blue-900">
              Add New Client
            </Typography>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-800">
                Client Email
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@example.com"
                required
                size="lg"
              />
            </div>

            {status && (
              <Typography variant="small" color="green" className="text-center">
                {status}
              </Typography>
            )}
            {error && (
              <Typography variant="small" color="red" className="text-center">
                {error}
              </Typography>
            )}
          </CardBody>

          <CardFooter className="pt-0 px-6 pb-6">
            <Button type="submit" color="blue" fullWidth>
              Send Invite
            </Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
