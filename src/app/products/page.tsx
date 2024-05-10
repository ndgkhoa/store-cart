import { Fragment } from "react";
import base from "../../../utils/airtable";
import ProductsList from "@/components/pages/products/products-list";
import { notFound } from "next/navigation";
import isValidArray from "../../../utils/isValidArray";

export default async function ProductPage() {
    const data = await base('products').select({
    }).all()

    if (!isValidArray(data)) {
        return notFound()
    }

    return (
        <div className="container my-14">
            <h1 className="text-2xl font-semibold mb-8">Tat ca san pham</h1>
            <ProductsList data={JSON.stringify(data)} />
        </div>
    );
}
