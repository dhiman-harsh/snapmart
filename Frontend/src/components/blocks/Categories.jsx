import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Categories = () => {
    return (
        <div>
            <Tabs defaultValue="foryou" className="w-full">
                <TabsList className="flex gap-4 w-full">
                    <TabsTrigger value="foryou">For You</TabsTrigger>
                    <TabsTrigger value="fashion">Fashion</TabsTrigger>
                    <TabsTrigger value="mobiles">Mobiles</TabsTrigger>
                    <TabsTrigger value="beaty">Beauty</TabsTrigger>
                    <TabsTrigger value="electronics">Electronics</TabsTrigger>
                    <TabsTrigger value="home">Home</TabsTrigger>
                    <TabsTrigger value="appliances">Appiances</TabsTrigger>
                    <TabsTrigger value="toys">Toys</TabsTrigger>
                    <TabsTrigger value="food">Food</TabsTrigger>
                    <TabsTrigger value="auto">Auto</TabsTrigger>
                    <TabsTrigger value="sports">Sports</TabsTrigger>
                    <TabsTrigger value="books">Books</TabsTrigger>
                    <TabsTrigger value="furniture">Furniture</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}

export default Categories