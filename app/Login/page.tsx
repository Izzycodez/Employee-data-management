"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { loginEmployee } from "@/lib/loginEmployee";

const CreateUser = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const accessToken = await loginEmployee(email, password);
      console.log("Logged in with token:", accessToken);
      router.push("/Employees");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle the error (e.g., show a message to the user)
    }
  }

  return (
    <div className="w-72 mx-auto mt-20">
      <form
        onSubmit={handleSubmit}
        className="w-full p-0 md:border-4 md:w-72 md:p-8"
      >
        <label htmlFor="address">Email address:</label>
        <br />
        <input
          className="px-1 my-1 md:my-3 md:p-3 border w-full"
          type="email"
          name="address"
          id="address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="abcd@efg.com"
        />
        <br />
        <label htmlFor="Password">Enter Password:</label>
        <br />
        <input
          type="password"
          required
          name="password"
          className="px-1 my-1 md:my-3 md:p-3 border w-full"
          id="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="text-blue-300 w-full bg-black p-2 border-0 mt-2"
        >
          Login
        </button>
      </form>
      <p>
        Don’t have an account yet? Click here to{" "}
        <Link href="/Register" className="text-blue-700">
          Register...
        </Link>
      </p>
    </div>
  );
};

export default CreateUser;
