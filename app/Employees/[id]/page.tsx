import { Metadata } from "next";

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.id}`,
  };
};
type Props = {
  params: { id: string };
};
function page({ params }: Props) {
  return <div>page {params.id}</div>;
}

export default page;
