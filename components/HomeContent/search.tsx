import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <div className="flex flex-col gap-[20px]">
            <b className="text-[16px]">Tìm Kiếm</b>
            <div className="flex items-center w-full max-w-lg bg-white rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] px-4 py-2">
                <input
                    type="text"
                    className="w-full text-gray-500 placeholder-gray-400 bg-transparent outline-none"
                    placeholder="Tìm kiếm bài viết"
                />
                <div className="bg-[#15AA7A] w-[40px] h-[40px] flex justify-center items-center rounded-lg shadow-md cursor-pointer">
                    <CiSearch className="text-white text-xl" />
                </div>
            </div>

        </div>
    )
}

export default Search