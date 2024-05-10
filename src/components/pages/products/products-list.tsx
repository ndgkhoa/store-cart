'use client'

import Link from "next/link"
import Image from "next/image"
import { Fragment } from "react"
import isValidArray from "../../../../utils/isValidArray"
import { getProductPrice } from "../../../../utils/product_utils"

const ProductImage = ({ product }: { product: any }) => {
    if (!isValidArray(product.fields?.images)) return <>No image found</>
    return (
        <>
            <Image
                className="aspect-square w-full"
                src={product.fields.images[0].url}
                alt={product.fields.name}
                width={product.fields.images[0].width}
                height={product.fields.images[0].height}
            />
        </>
    )
}

const ProductsList = (props: {
    data: any
}) => {

    const data = JSON.parse(props.data)
    console.log(data);

    //['products-variants', 'description', 'name', 'images', 'id', 'record_id']
    return (
        <div className="grid grid-cols-4 gap-5">
            {data.map((product: any, index: number) => (
                <Fragment key={index}>
                    <Link href={`/products/${product.id}`}>
                        <ProductImage product={product} />
                        <p className="line-clamp-2">{product.fields.name}</p>
                        <p className="font-bold">{getProductPrice(product.fields).toLocaleString('vi-VN')} VND</p>
                    </Link>
                </Fragment>
            ))}
        </div>
    )
}
export default ProductsList
