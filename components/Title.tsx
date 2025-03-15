import Breadcrumb from "./BreadCrumb"
import Image from 'next/image'


const Title = () => {
    return (
        <div >
            <div className="flex">
                <div className="w-1/10 pl-[32px]">
                    <Image
                        src="/Saly-42.png"
                        width={282}
                        height={268}
                        alt="Picture of the author"
                    />
                </div>
                <div className="w-4/5 flex flex-col items-center">
                    <Breadcrumb />
                    <div className="flex flex-1 flex-col text-[48px] text-center mt-[32px] mb-[12px]">
                        <div>
                            Blog <span className="text-[#1AD598] px-2">FOSO</span> -
                        </div>
                        <div className="text-[48px]">Cập Nhật Tin Tức
                            <b className="relative ml-2">
                                Mới Nhất
                                <div className="absolute inset-x-0 bottom-0 h-[20px] bg-[#A3EED6] -z-10 rounded-[12px]"></div>
                            </b>

                        </div>
                    </div>
                    <span className="text-[12px]">
                        Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
                    </span>
                </div>
                <div className="w-1/10 pr-[32px]">
                    <Image
                        src="/Saly-25.png"
                        width={320}
                        height={251}
                        alt="Picture of the author"
                    /></div>
            </div>
        </div>
    )
}

export default Title