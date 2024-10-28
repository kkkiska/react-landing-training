import Post from "./Post";
import {postData} from "./postData"

export default function SectionPosts() {
    console.log(postData)
    const posts = postData.map((post, i) =>
            <Post
                key={i}
                link={post.link}
                imgPath={post.imgPath} 
                category={post.category} 
                title={post.title}
                date={post.date}
                author={post.author}
                description={post.description}
            />)

    return (
        <div className="posts">
            {posts}
        </div>
    )
}