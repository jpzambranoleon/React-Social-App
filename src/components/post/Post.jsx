import "./post.css"
import { MoreVert } from "@material-ui/icons"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/person3.jpg" alt="" />
                        <span className="postUsername">Emma Richards</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter"></div>
                <div className="postBottom"></div>
            </div>
        </div>
    )
}