import Image from "next/image"

import { MdOutlineDateRange } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
const SinglePost = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="w-full">
                <Image
                    src={'/image.png'}
                    alt="ảnh"
                    width={505}
                    height={475}
                    layout='responsive'
                />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-center items-center bg-[#E2F0FE] rounded-[8px] w-fit pl-2 pr-2 pt-1 pb-1">
                    <span className="text-[12px] text-[#0F4F9E]">Quản lý sản xuất</span>
                </div>
                <b className="text-[22px]">Tại sao BOM quan trọng trong quản lý sản xuất?</b>
                <div className="flex items-center text-gray-500 text-[14px] gap-3">
                    <div className="flex items-center gap-1">
                        <MdOutlineDateRange className="text-[18px]" />
                        <span className="font-medium">17/11/2022</span>
                    </div>
                    <div className="h-[14px] w-[1px] bg-gray-300"></div>
                    <div className="flex items-center gap-1">
                        <CiClock2 className="text-[18px]" />
                        <span className="font-medium">10 phút đọc</span>
                    </div>
                </div>
                <a href="/post" className="flex items-center text-gray-500 text-[16px] font-medium gap-2 cursor-pointer hover:text-gray-700 transition-all">
                    <span>Khám phá thêm</span>
                    <span className="text-[18px]">→</span>
                </a>
            </div>

        </div>
    )
}

export default SinglePost