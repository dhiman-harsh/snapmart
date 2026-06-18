import { Button } from "../ui/button"
import { Input } from "../ui/input"

const FooterContact = () => {
    return (
        <div className="pt-10 flex flex-col gap-4 w-[360px]">
            <Input placeholder="Enter your email address" />
            <Button className={`w-full`}>Get Started</Button>
        </div>
    )
}

export default FooterContact