import Image from "next/image"
import SinglePost from "../SinglePost"
const Posts = () => {
    return (
        <div className="flex flex-col gap-5">
            <b className="text-[20px]">Tất cả bài viết</b>
            <div className="w-full">
                <Image
                    src={'/banner_3.png'}
                    alt="ảnh"
                    width={1042}
                    height={319}
                    layout="responsive"
                />
            </div>
            {[...Array(3)].map((_, index) => (
                <div key={index} className="flex gap-5">
                    <SinglePost />
                    <SinglePost />
                </div>
            ))}
        </div>
    )
}

export default Posts