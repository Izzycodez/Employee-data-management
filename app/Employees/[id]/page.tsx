import { Metadata } from "next";
import { getEmployee } from "@/lib/getEmployee";
import Link from "next/link";

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.id}`,
  };
};
type Props = {
  params: { id: string };
};
async function EmployeePage({ params }: Props) {
  const employee: MyEmployee = await getEmployee(params.id);
  console.log(employee);
  return (
    <div>
      <div className="p-10 m-2">
        <div className="text-xl font-serif underline m-5 p-2">
          This is {employee.firstName + " " + employee.lastName} profile. <hr />
        </div>
        <div className="px-8 text-center lg:bg-red-600">
          Bank name: {employee.bankName} <br />
          Account name: {employee.accountName} <br />
          Account Number: {employee.bankAccountNumber} <br />
          Employee Address: {employee.physicalAddress} <br />
          E-Address: {employee.emailAddress} <br />
          Phone Number: {employee.phoneNumber} <br />
          Emergency Number : {employee.emergencyPhoneNumber} <br />
          Next of kin : {employee.nextOfKinFullName} <br />
          Next Of kin Number: {employee.nextOfKinPhoneNumber} <br />
          Next Of kin Relationship: {employee.nextOfKinRelationship} <br />
          Job Role: {employee.employmentRole} <br />
          Employment Start Date: {employee.employmentStartDate} <br />
          Birthday: {employee.dateOfBirth} <br />
          Education level: {employee.educationalLevel} <br />
          <Link href={"/employees"} className="text-blue-400">
            Go back to the previous page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmployeePage;
