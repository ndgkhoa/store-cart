import HomePage from "@/components/pages/hompage";
import Image from "next/image";
import { Fragment } from "react";
import base from "../../ultils/airtable";

export default async function Home() {
  const data = await base('products').select({

  }).all()
  return (
    <Fragment>
      <HomePage data={JSON.stringify(data)} />
    </Fragment>
  );
}
