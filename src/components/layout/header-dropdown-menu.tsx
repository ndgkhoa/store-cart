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
                    <DropdownMenuLabel className="lg:hidden">SAN PHAM</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuLabel>REX COLLECTION</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Ao Rex</DropdownMenuItem>
                    <DropdownMenuItem>Khung long Rex</DropdownMenuItem>
                    <DropdownMenuItem>Balo</DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>DUNG CU TAP THE THAO</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Cac san pham khac</DropdownMenuItem>
                    <DropdownMenuItem>Lo xo co tay</DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>REX PHIEN BAN GIOI HAN</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Cac san pham khac</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
export default HeaderDropdownMenu
