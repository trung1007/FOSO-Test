"use client";
import { useState } from "react";
import Image from "next/image";

const OutlinePost = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (id: any) => {
        console.log(id);
        
        setActiveItem(id);
    };

    // Dữ liệu Menu
    const menuItems = [
        { id: "p1", title: "Quy trình 5S là gì?" },
        { id: "p2", title: "Lợi ích quy trình 5S đem lại" },
        {
            id: "p3",
            title: "Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
            children: [
                { id: "p3-1", title: "Cải thiện rõ nét môi trường làm việc" },
                { id: "p3-2", title: "Tiết kiệm thời gian đáng kể" },
                { id: "p3-3", title: "Tăng năng suất làm việc" },
                { id: "p3-4", title: "Tiết kiệm chi phí" },
                { id: "p3-5", title: "Tăng chất lượng sản phẩm" }
            ]
        },
        {
            id: "p4",
            title: "Quy trình 5S gồm các bước",
            children: [
                { id: "p4-1", title: "Seiri (Ngăn nắp)" },
                { id: "p4-2", title: "Seiton (Sắp xếp)" },
                { id: "p4-3", title: "Seiso (Vệ sinh)" },
                { id: "p4-4", title: "Seiketsu (Tiêu chuẩn hóa)" },
                { id: "p4-5", title: "Shitsuke (Kỷ luật)" }
            ]
        },
        {
            id: "p5",
            title: "Quy trình được thực hiện như sau",
            children: [
                { id: "p5-1", title: "Giai đoạn chuẩn bị" },
                { id: "p5-2", title: "Triển khai rộng rãi" },
                { id: "p5-3", title: "Thực hiện vệ sinh toàn bộ doanh nghiệp" },
                { id: "p5-4", title: "Sàng lọc, sắp xếp và đánh giá" },
                { id: "p5-5", title: "Đánh giá" }
            ]
        },
        { id: "p6", title: "Quy trình 5S có giống với Kaizen?" },
        { id: "p7", title: "Đối tượng nào nên áp dụng 5S?" },
        { id: "p8", title: "Các yếu tố tạo nên thành công cho quy trình 5S" }
    ];

    return (
        <div className="w-full max-w-xs flex flex-col gap-[20px]">
            <b className="text-[16px]">Nội Dung Bài Viết</b>
            <div className="text-[16px] leading-[1.75] text-[#1E1E1E]">
                <ol className="list-decimal pl-4">
                    {menuItems.map((item) => (
                        <li key={item.id} className={`${activeItem === item.id ? "text-[#15AA7A] font-bold" : "text-black"
                            }`}>
                            <a
                                href={`#${item.id}`}
                                onClick={() => handleClick(item.id)}
                                className={`transition-colors duration-300 ${activeItem === item.id ? "text-[#15AA7A] font-bold" : "text-black"
                                    }`}
                            >
                                {item.title}
                            </a>
                            {item.children && (
                                <ol className="list-[decimal] pl-6">
                                    {item.children.map((child) => (
                                        <li key={child.id} className={`${activeItem === child.id ? "text-[#15AA7A] font-bold" : "text-black"
                                        }`} >
                                            <a
                                                href={`#${child.id}`}
                                                onClick={() => handleClick(child.id)}
                                                className={`transition-colors duration-300 ${activeItem === child.id ? "text-[#15AA7A] font-bold" : "text-black"
                                                    }`}
                                            >
                                                {child.title}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </li>
                    ))}
                </ol>
            </div>

            <div className="w-full">
                <Image src="/banner_1.png" alt="ảnh" layout="responsive" width={366} height={651} />
            </div>
            <div className="w-full">
                <Image src="/banner_2.png" alt="ảnh" layout="responsive" width={366} height={651} />
            </div>
        </div>
    );
};

export default OutlinePost;
