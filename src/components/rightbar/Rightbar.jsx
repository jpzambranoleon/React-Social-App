import "./rightbar.css"

export default function RightBar() {
    return (
        <div className="rightbar">
            <div className="rightWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Aki Majima</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
            </div>
        </div>
    )
}