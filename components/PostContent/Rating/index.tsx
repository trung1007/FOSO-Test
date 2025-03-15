import Image from "next/image"

const Rating = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-col gap-3 justify-center items-center">
                <span className="text-[20px] font-bold">Bạn thấy bài viết như nào</span>
                <span className="text-gray-400"> 4 phản hồi</span>
            </div>
            <div className="flex gap-3">
                <Image
                    src={'/reaction.png'}
                    alt="ảnh"
                    width={90}
                    height={110}
                />
                <Image
                    src={'/reaction_1.png'}
                    alt="ảnh"
                    width={90}
                    height={110}
                /> <Image
                    src={'/reaction_2.png'}
                    alt="ảnh"
                    width={90}
                    height={110}
                /> <Image
                    src={'/reaction_3.png'}
                    alt="ảnh"
                    width={90}
                    height={110}
                /> <Image
                    src={'/reaction_4.png'}
                    alt="ảnh"
                    width={90}
                    height={110}
                />
                 <Image
                    src={'/reaction_5.png'}
                    alt="ảnh"
                    width={90}
                    height={110}
                />
            </div>

        </div>
    )
}

export default Rating