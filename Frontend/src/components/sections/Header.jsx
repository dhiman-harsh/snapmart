import Navbar from "../blocks/Navbar"
import StaticNav from "../blocks/StaticNav"


const Header = () => {
    return (
        <div className="py-4 sticky top-0 z-10 bg-white mx-25">
            <StaticNav />
            <Navbar />
        </div>
    )
}

export default Header