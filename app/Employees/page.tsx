import { getAllEmployees } from "@/lib/getAllEmployees";
import Addform from "../Components/AddForm";
import { Navigator } from "../Components/Navigator";
export const dynamic = "force-dynamic"; // Forces server-side rendering

export const metadata = {
  title: "Sleeky Employees",
};

const EmployeePage = async () => {
  try {
    const employees: MyEmployee[] = await getAllEmployees();

    return (
      <div className="border-2 w-4/5 mx-auto my-4 p-4 max-sm:bg-red-800 max-md:w-full">
        <h1 className="text-center text-4xl">Welcome to Sleeky Programmers</h1>
        <section>
          <ul className="grid grid-cols-2 text-xl ">
            {employees.map((employee) => (
              <li
                className="border-2 rounded-lg m-3 p-4 "
                key={employee.firstName}
              >
                {`${employee.firstName} ${employee.lastName}`} <br />
                <Navigator
                  pathDirection={`/employees/${employee._id}`}
                  text={`Go to ${employee.firstName}'s profile to see more`}
                />
              </li>
            ))}
          </ul>
        </section>
        <Addform />
      </div>
    );
  } catch (error) {
    console.error("Error fetching employees:", error);
    return <div>Error loading employees. Please try again later.</div>;
  }
};

export default EmployeePage;
