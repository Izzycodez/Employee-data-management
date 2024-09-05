"use server";
import { cookies } from "next/headers";

export const createEmployee = async (employeeData: Employee) => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("token")?.value;

    if (!accessToken) {
      throw new Error("No access token found.");
    }

    console.log("Access Token:", accessToken);
    console.log("Employee Data:", employeeData);

    const res = await fetch(process.env.NEXT_PUBLIC_EMPLOYEE_API as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(employeeData),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error Response:", errorData);
      throw new Error("Failed to create employee.");
    }

    console.log("Employee created successfully.");
  } catch (error) {
    console.error("Error:", error);
  }
};
