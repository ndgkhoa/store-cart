import HomePage from "@/components/pages/hompage";
import { Fragment } from "react";
import base from "../../utils/airtable";

export default async function Home() {
  const data = await base('products').select({

  }).all()
  return (
    <Fragment>
      <HomePage data={JSON.stringify(data)} />
    </Fragment>
  );
}
