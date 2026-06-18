import Location from "./Location"
import Logo from "./Logo"

const StaticNav = () => {
    return (
        <div className="flex justify-between">
            <Logo />
            <Location />
        </div>
    )
}

export default StaticNav