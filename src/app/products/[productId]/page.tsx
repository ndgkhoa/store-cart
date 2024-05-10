import { notFound } from "next/navigation"
import base from "../../../../utils/airtable"
import isValidArray from "../../../../utils/isValidArray"

const SingleProduct = async ({ params }: { params: { productId: string } }) => {
    const data = await base('products').select({
        filterByFormula: `RECORD_ID='${params.productId}'`
    }).all()

    if (!isValidArray(data)) {
        return notFound()
    }

    const product = data[0]

    return (
        <div>

        </div>
    )
}
export default SingleProduct