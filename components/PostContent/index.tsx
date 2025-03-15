import MainContent from "./MainContent"
import OutlinePost from "./OutlinePost"
import ShareApp from "../ShareApp"
import RelativePost from "../RelativePost"
import Breadcrumb from "../BreadCrumb"

const PostContent = () => {
    return (
        <div className="flex w-full justify-center gap-5">
            <div className="flex w-4/5 gap-5 flex-col">
                <Breadcrumb />
                <div className="flex flex-1 gap-5">
                    <MainContent />
                    <OutlinePost />
                </div>
                <RelativePost />
            </div>

        </div>
    )
}

export default PostContent