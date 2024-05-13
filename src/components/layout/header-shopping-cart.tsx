'use client'
import { useCartStore } from "@/state/cart-store"
import Link from "next/link"
import { AiOutlineShoppingCart } from "react-icons/ai"

const HeaderShoppingCart = () => {
    const cartStore = useCartStore()
    return (
        <Link href={'/cart'} className="relative">
            <AiOutlineShoppingCart className="w-8 h-8" />
            <div className="absolute h-full w-full flex items-center top-0 left-0">
                <span className="text-xs font-bold leading-none -mt-1 ml-4">
                    {cartStore.list.length}
                </span>
            </div>
        </Link>
    )
}
export default HeaderShoppingCart
