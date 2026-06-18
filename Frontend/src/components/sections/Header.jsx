import Categories from "@/components/blocks/Categories"
import Navbar from "../blocks/Navbar"
import StaticNav from "../blocks/StaticNav"


const Header = () => {
    return (
        <div className="py-4 sticky top-0 mx-25">
            <StaticNav />
            <Navbar />
            <Categories />
        </div>
    )
}

export default Header