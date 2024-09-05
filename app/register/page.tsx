"use client";
import React, { FormEvent } from "react";
import { useState } from "react";
import { registerAccount } from "@/lib/registerAccount";
import { useRouter } from "next/navigation";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerAccount(password, confirmPassword, email);
    router.push("/login");
  };

  return (
    <div className="w-72 mx-auto mt-20">
      <form action="" className="w-full p-0 " onSubmit={handleSubmit}>
        <legend>
          <label htmlFor="FirstName">First Name:</label>
          <br />
          <input
            className="px-1 my-1  border w-full"
            type="text"
            name="FirstName"
            id="FirstName"
            placeholder="Malachy"
          />{" "}
          <br />
          <label htmlFor="LastName">Last Name:</label>
          <br />
          <input
            type="text"
            className="px-1 my-1  border w-full"
            name="LastName"
            id="LastName"
            placeholder="Osung"
          />{" "}
          <br />
          <label htmlFor="address">Email address:</label>
          <br />
          <input
            type="email"
            className="px-1 my-1  border w-full"
            name="address"
            id="address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abcd@efg.com"
          />{" "}
          <br />
          <label htmlFor="Password">Set Password</label>
          <br />
          <input
            className="px-1 my-1  border w-full"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            placeholder="********"
          />{" "}
          <br />
          <label htmlFor="ConfirmPassword">Confirm Password </label>
          <br />
          <input
            className="px-1 my-1  border w-full"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="Confirmpassword"
            id="Confirmpassword"
            placeholder="********"
          />{" "}
          <br />
          <button
            type="submit"
            className="text-blue-300 w-full bg-black p-2 border-0 mt-2"
          >
            Register
          </button>
        </legend>
      </form>
    </div>
  );
};

export default Register;
