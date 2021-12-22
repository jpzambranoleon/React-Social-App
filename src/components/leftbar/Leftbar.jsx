import "./leftbar.css"
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from "@material-ui/icons"

export default function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <RssFeed className="leftbarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="leftbarListItem">
                        <Chat className="leftbarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="leftbarListItem">
                        <PlayCircleFilledOutlined className="leftbarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="leftbarListItem">
                        <Group className="leftbarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="leftbarListItem">
                        <Bookmark className="leftbarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="leftbarListItem">
                        <HelpOutline className="leftbarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="leftbarListItem">
                        <WorkOutline className="leftbarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="leftbarListItem">
                        <Event className="leftbarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="leftbarListItem">
                        <School className="leftbarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarHr"/>
                <ul className="leftbarFriendList">
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/person2.jpg" alt="" />
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/person2.jpg" alt="" />
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/person2.jpg" alt="" />
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/person2.jpg" alt="" />
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/person2.jpg" alt="" />
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/person2.jpg" alt="" />
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/person2.jpg" alt="" />
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/person2.jpg" alt="" />
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/person2.jpg" alt="" />
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/person2.jpg" alt="" />
                        <span className="leftbarFriendName">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}