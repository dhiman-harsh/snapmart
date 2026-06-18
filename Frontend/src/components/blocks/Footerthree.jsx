import { Button } from "../ui/button"

const Footerthree = () => {
    return (
        <div>
            <h3 className="text-center">FOOTER</h3>
            <div className="flex flex-col">
                <Button variant="link">First Link</Button>
                <Button variant="link">Second Link</Button>
                <Button variant="link">Third Link</Button>
                <Button variant="link">Fourth Link</Button>
            </div>
        </div>
    )
}

export default Footerthree