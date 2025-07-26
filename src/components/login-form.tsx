"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogIn, KeyRound } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (username === "admin" && password === "password") {
      toast({
        title: "Login Successful",
        description: "Welcome back, admin!",
      });
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Card className="w-full max-w-sm shadow-2xl">
      <form onSubmit={handleLogin}>
        <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <KeyRound className="w-8 h-8 text-primary" />
                </div>
            </div>
          <CardTitle className="text-3xl font-headline">StockFlow</CardTitle>
          <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="admin"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-sm font-medium text-destructive">{error}</p>}
        </CardContent>
        <CardFooter>
            <Button type="submit" className="w-full">
                <LogIn className="mr-2 h-4 w-4" />
                Login
            </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
