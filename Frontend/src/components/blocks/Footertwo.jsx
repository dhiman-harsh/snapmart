import { Button } from "../ui/button"

const Footertwo = () => {
    return (
        <div>
            <h3 className="text-center">HELP</h3>
            <div className="flex flex-col">
                <Button variant="link">First Link</Button>
                <Button variant="link">Second Link</Button>
                <Button variant="link">Third Link</Button>
                <Button variant="link">Fourth Link</Button>
            </div>
        </div>
    )
}

export default Footertwo