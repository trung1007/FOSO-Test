import Header from "@/components/Header";
import PostContent from "@/components/PostContent";
import RelativePost from "@/components/RelativePost";
import ShareApp from "@/components/ShareApp";

export default function PostsScreen() {
    return (
        <div className="w-full">
            <Header />
            <div className="flex">
                <div className="w-1/10 flex items-start justify-end ">
                    <ShareApp />
                </div>
                <div className="flex flex-1 flex-col w-4/5">
                    <PostContent />
                </div>
            </div>
        </div>
    )
}