import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import Search from "../icons/Search"

const Searchbar = () => {
    return (
        <div className="flex gap-4 flex-1">
            <Input />
            <Button>
                <Search />
            </Button>
        </div>
    )
}

export default Searchbar