import Image from 'next/image'
import { SlArrowDown } from "react-icons/sl";
import { GoArrowUpRight } from "react-icons/go";
import { IoStar } from "react-icons/io5";
const Header = () => {


    return (
        <div style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: "center" }}>
            <div className="flex items-center justify-center gap-10 bg-white w-4/5 py-3 rounded-[40px] my-3">
                <Image
                    src="/FOSO_Logo.png"
                    width={134}
                    height={55}
                    alt="Picture of the author"
                />
                <div className='flex items-center gap-5'>
                    <span>Về chúng tôi</span>
                    <span className='flex items-center gap-2'>Giải pháp <SlArrowDown /> </span>
                    <span className='flex items-center gap-2'><b>Tài nguyên</b> <SlArrowDown /> </span>
                    <span>Liên hệ  </span>
                </div>
                <div className='flex items-center gap-5'>
                    <div  className='flex items-center bg-gray-200 justify-center py-2 px-2.5 gap-3 rounded-[20px]'>
                        <div className="py-1 px-1 rounded-[12px] bg-red-500 flex justify-center items-center w-fit h-fit"
                        >
                            <IoStar className="text-yellow-200" />

                        </div>
                        <span className='flex items-center gap-1'>VI <SlArrowDown /> </span>
                    </div>
                    <div className='flex items-center bg-[#1AD598] justify-center py-2 px-2.5 gap-3 rounded-[20px]'>
                        <b >Trở Thành Khách Hàng </b>
                        <div className="py-1 px-1 rounded-[12px] bg-black flex justify-center items-center w-fit h-fit"
                        >
                            <GoArrowUpRight className="text-white" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header