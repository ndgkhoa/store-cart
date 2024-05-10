import Link from "next/link"
import { IoMailOutline } from "react-icons/io5"
import { PiFacebookLogo, PiInstagramLogo, PiPhone, PiTiktokLogo, PiYoutubeLogo } from "react-icons/pi"

const Footer = () => {
    return (
        <footer className={`bg-[#f9f9f9] pt-14 pb-32 bg-[url('/images/footer.png')] bg-left-bottom bg-repeat-x`}>
            <div className="container grid lg:grid-cols-4 gap-8">
                <div className="flex flex-col gap-6 lg:col-span-2">
                    <h4 className="font-bold text-2xl">Thong tin cua hang</h4>
                    <div className="flex flex-col gap-4">
                        <Link href={'#youtube'} className="flex items-center text-gray-700 gap-3">
                            <PiYoutubeLogo className="w-6 h-6" />
                            <span>@ytname</span>
                        </Link>
                        <Link href={'#phone'} className="flex items-center text-gray-700 gap-3">
                            <PiPhone className="w-6 h-6" />
                            <span>0123.456.789</span>
                        </Link>
                        <Link href={'#mail'} className="flex items-center text-gray-700 gap-3">
                            <IoMailOutline className="w-6 h-6" />
                            <span>email@gmail.com</span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-2xl">Mang xa hoi</h4>
                    <div className="flex gap-3">
                        <Link href={'#youtube'}>
                            <PiYoutubeLogo className="h-10 w-10" />
                        </Link>
                        <Link href={'#instagram'}>
                            <PiInstagramLogo className="h-10 w-10" />
                        </Link>
                        <Link href={'#tiktok'}>
                            <PiTiktokLogo className="h-10 w-10" />
                        </Link>
                        <Link href={'#facebook'}>
                            <PiFacebookLogo className="h-10 w-10" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-6 lg:text-right">
                    <h4 className="font-bold text-2xl">Chinh sach</h4>
                    <Link href={'/chinh-sach-bao-hanh'} className="text-gray-700">Chinh sach bao hanh</Link>
                    <Link href={'/chinh-sach-van-chuyen'} className="text-gray-700">Chinh sach van chuyen</Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer
