import { RxHamburgerMenu } from "react-icons/rx"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const HeaderDropdownMenu = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <RxHamburgerMenu className="w-8 h-8 cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="-translate-x-1/3">
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel className="lg:hidden">SẢN PHẨM</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuLabel>GIÀY CỎ NHÂN TẠO</DropdownMenuLabel>
                    <DropdownMenuItem>Nike</DropdownMenuItem>
                    <DropdownMenuItem>Adidas</DropdownMenuItem>
                    <DropdownMenuItem>Mizuno</DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>GIÀY FUTSAL</DropdownMenuLabel>
                    <DropdownMenuItem>Nike</DropdownMenuItem>
                    <DropdownMenuItem>Joma</DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>PHỤ KIỆN</DropdownMenuLabel>
                    <DropdownMenuItem>Starbalm</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
export default HeaderDropdownMenu
