import FooterContact from "../blocks/FooterContact"
import Footerone from "../blocks/Footerone"
import Footerthree from "../blocks/Footerthree"
import Footertwo from "../blocks/Footertwo"

const Footer = () => {
    return (
        <div className="flex justify-between mb-15 py-10 bg-neutral-100 px-25">
            <Footerone />
            <Footertwo />
            <Footerthree />
            <FooterContact />
        </div>
    )
}

export default Footer