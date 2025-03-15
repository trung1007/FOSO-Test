import Image from "next/image"

const Category = () => {
    return (
        <div className="w-full max-w-xs flex flex-col gap-[20px]">
            <b className="text-[16px]">Danh Mục</b>
            <ul className="space-y-2">
                {[
                    { name: "Tất cả", count: 108 },
                    { name: "Thiết Kế Website", count: 36 },
                    { name: "Thiết Kế App Mobile", count: 13 },
                    { name: "Quản Lý Sản Xuất", count: 25 },
                    { name: "Quản Lý Bán Hàng", count: 22 },
                    { name: "Báo Chí Nói Về FOSO", count: 7 },
                    { name: "Tin Tức FOSO", count: 5 },
                ].map((item, index) => (
                    <li key={index} className="flex justify-between text-gray-700 hover:text-black cursor-pointer mb-3">
                        <span>{item.name}</span>
                        <span className="text-gray-400">{item.count}</span>
                    </li>
                ))}
            </ul>
            <div className="w-full">
                <Image
                    src="/banner_1.png"
                    alt="ảnh"
                    layout="responsive"
                    width={366}
                    height={651}
                />
            </div>
            <div className="w-full">
                <Image
                    src="/banner_2.png"
                    alt="ảnh"
                    layout="responsive"
                    width={366}
                    height={651}
                />
            </div>
        </div>
    )
}

export default Category