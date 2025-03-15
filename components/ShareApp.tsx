import { SiZalo } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";

const ShareApp = () => {
    return (
        <div className="flex flex-col gap-3 w-fit justify-center items-center">
            <b  className="text-[16px] ">Chia sẻ</b>
            <div className="flex justify-center items-center rounded-[10px] w-8 h-8 border-2 border-current text-[#15AA7A]">
                <SiZalo className="text-[20px]" />
            </div>
            <div className="flex justify-center items-center rounded-[10px] w-8 h-8 border-2 border-current text-[#15AA7A]">
                <FaFacebookF className="text-[20px]" />
            </div>
            <div className="flex justify-center items-center rounded-[10px] w-8 h-8 border-2 border-current text-[#15AA7A]">
                <FaSquareXTwitter className="text-[20px]" />
            </div>
            <div className="flex justify-center items-center rounded-[10px] w-8 h-8 border-2 border-current text-[#15AA7A]">
                <FaLinkedin className="text-[20px]" />
            </div>
            <div className="flex justify-center items-center rounded-[10px] w-8 h-8 border-2 border-current text-[#15AA7A]">
                <FaRedditAlien className="text-[20px]" />
            </div>
        </div>
    )
}

export default ShareApp