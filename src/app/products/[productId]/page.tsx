import { notFound } from "next/navigation"
import base from "../../../../utils/airtable"
import isValidArray from "../../../../utils/isValidArray"
import Link from "next/link"
import Image from "next/image"
import { Fragment } from "react"
import { resolveRichText } from "../../../../utils/product_utils"
import { marked } from "marked"
import ProductVariantSelection from "@/components/pages/products/product-variant-selection"

const SingleProduct = async ({ params }: { params: { productId: string } }) => {
    const data = await base('products').select({
        filterByFormula: `RECORD_ID='${params.productId}'`
    }).all()

    if (!isValidArray(data)) {
        return notFound()
    }

    const product = data[0]

    const ProductThumbails = ({ product }: { product: any }) => {
        if (!isValidArray(product.fields?.images)) return <>No image found</>
        return (
            <div className="flex flex-col gap-2">
                {product.fields?.images.map((image: any, index: string) => (
                    <Link href={`#${image.id}`} key={index}>
                        <Image
                            src={image.url}
                            alt={product.fields.name}
                            width={150}
                            height={150}
                        />
                    </Link>
                ))}
            </div>
        )
    }

    const ProductImages = ({ product }: { product: any }) => {
        if (!isValidArray(product.fields?.images)) return <>No image found</>
        return (
            <div className="flex flex-col gap-2">
                {product.fields?.images.map((image: any, index: string) => (
                    <Fragment key={index}>
                        <Image
                            className="w-full"
                            src={image.url}
                            alt={product.fields.name}
                            width={image.width}
                            height={image.height}
                            id={image.id}
                        />
                    </Fragment>
                ))}
            </div>
        )
    }

    return (
        <div className="container my-6">
            <div className="flex gap-6">
                <div className="flex-shrink-0">
                    <div className="sticky top-24">
                        <ProductThumbails product={product} />
                    </div>
                </div>
                <div className="flex-grow flex gap-6">
                    <div className="w-1/2 flex-shrink-0">
                        <ProductImages product={product} />
                    </div>
                    <div className="flex-grow">
                        <h1 className="my-4 text-4xl">{String(product.fields.name)}</h1>
                        <ProductVariantSelection product={JSON.stringify(product)} />
                        <div className="my-8">
                            <div dangerouslySetInnerHTML={{ __html: marked.parse(resolveRichText(product.fields.description)) }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleProduct
