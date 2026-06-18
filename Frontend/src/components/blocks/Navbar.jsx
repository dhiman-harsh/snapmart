import NavMenu from "./NavMenu"
import Searchbar from "./Searchbar"

const Navbar = () => {
    return (
        <div className="flex justify-between py-2">
            <Searchbar />
            <NavMenu />
        </div>
    )
}

export default Navbar