'use client'
import { TCartItem, useCartStore } from "@/state/cart-store"
import isValidArray from "../../../../utils/isValidArray"
import Link from "next/link"
import Image from "next/image";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PiMinus, PiPlus, PiTrash } from "react-icons/pi"
import { Input } from "@/components/ui/input";

const CartList = () => {
    const cartStore = useCartStore()
    if (!isValidArray(cartStore.list)) return (
        <>
            <p>Không có sản phẩm nào trong giỏ hàng</p>
            <p>Hãy tham khảo các <Link className="text-indigo-600 underline" href={'/products'}>sản phẩm</Link> của chúng tôi</p>
        </>
    )
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[350px]">Sản phẩm</TableHead>
                        <TableHead className="w-[350px]">Số lượng</TableHead>
                        <TableHead className="text-right w-[250px]">Giá</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cartStore.list.map((item: TCartItem, index: number) => (
                        <TableRow key={item.variant_id}>
                            <TableCell className="font-medium">
                                <CartItemInfo cartItem={item} />
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1">
                                    <Button
                                        onClick={() => {
                                            cartStore.increaseQuantity({
                                                variant_id: item.variant_id,
                                                quantity: -1
                                            })
                                        }}
                                        size={'icon'} variant={'secondary'}
                                    >
                                        <PiMinus />
                                    </Button>
                                    <Input
                                        className="w-20"
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => {
                                            cartStore.updateQuantity({
                                                variant_id: item.variant_id,
                                                quantity: Number(e.target.value)
                                            })
                                        }}
                                    />
                                    <Button
                                        onClick={() => {
                                            cartStore.increaseQuantity({
                                                variant_id: item.variant_id,
                                                quantity: 1
                                            })
                                        }}
                                        size={'icon'} variant={'secondary'}
                                    >
                                        <PiPlus />
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            cartStore.deleteCartItem({
                                                variant_id: item.variant_id
                                            })
                                        }}
                                        size={'icon'} variant={'secondary'}
                                    >
                                        <PiTrash />
                                    </Button>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                {(item.product_variant.variant_price * item.quantity).toLocaleString('vn-VN')} VND
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex flex-col gap-3 my-5 w-full items-end sticky top-28">
                <p>Tổng giá trị: {cartStore.list.reduce((acc, item) => acc + item.product_variant.variant_price * item.quantity, 0).toLocaleString('vn-VN')} VND</p>
                <Button size={'lg'}>Thanh toán</Button>
            </div>
        </>
    )
}
export default CartList

export const CartItemInfo = ({ cartItem }: { cartItem: TCartItem }) => {
    const { product_variant: variant, product } = cartItem
    return (
        <div className="flex gap-5">
            {variant.variant_image?.url ? (
                <Image
                    className="w-20 aspect-square bg-gray-200"
                    src={variant.variant_image.url}
                    alt={variant.variant_name}
                    width={150}
                    height={150}
                />
            ) : (
                <div className="w-full aspect-square bg-gray-200" />
            )}
            <div>
                <Link href={`/products/${product.record_id}`}
                    className="text-indigo-600 line-clamp-2 mb-2"
                >
                    {product.name}
                </Link>
                <p>{variant.variant_name}</p>
                <p>{variant.variant_price.toLocaleString('vn-VN')} VND</p>
            </div>
        </div>
    )
}

