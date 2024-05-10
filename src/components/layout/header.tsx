import Link from "next/link"
import HeaderDropdownMenu from "./header-dropdown-menu"
import HeaderShoppingCart from "./header-shopping-cart"

const Header = () => {
    return (
        <header className="fixed w-full top-0 z-50 bg-white shadow">
            <div className="container flex items-center justify-between gap-5 h-24">
                <Link href={'/'} className="text-red-800 text-4xl italic font-bold">
                    REXsport
                </Link>
                <div className="hidden lg:flex gap-12">
                    <Link href={'/'}>Trang chu</Link>
                    <Link href={'/products'}>San pham</Link>
                    <Link href={'/about'}>About</Link>
                </div>
                <div className="flex items-center gap-5">
                    <HeaderDropdownMenu />
                    <HeaderShoppingCart />
                </div>
            </div>
        </header>
    )
}
export default Header
