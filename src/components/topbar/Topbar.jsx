import "./topbar.css"
import { Search, Person } from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topBarLeft">
                <span className="logo">someSocial</span>
            </div>
            <div className="topBarCenter">
                <div className="searchbar">
                    <Search />
                    <input placeholder="Search for friends, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topBarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}