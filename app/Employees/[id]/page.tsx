import { Metadata } from "next";
import { getEmployee } from "@/lib/getEmployee";

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.id}`,
  };
};
type Props = {
  params: { id: string };
};
async function EmployeePage({ params }: Props) {
  const employee: MyEmployee[] = await getEmployee(params.id);
  console.log(employee);
  return <div>page {params.id}</div>;
}

export default EmployeePage;
