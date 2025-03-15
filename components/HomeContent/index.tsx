import Category from "./category"
import Posts from "./posts"
import Search from "./search"

const Content = () => {
    return (
        <div className="flex w-[100%] justify-center">
            <div className="flex w-4/5 gap-5">
                <div className="flex flex-1">
                    <Posts />

                </div>
                <div className="flex flex-col gap-[20px]">
                    <Search />
                    <Category />
                </div>
            </div>

        </div>
    )
}

export default Content