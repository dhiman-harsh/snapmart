import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroForYou from "./HeroForYou"
import HeroFashion from "./HeroFashion"

const Hero = () => {
    return (
        <div className="mx-25">
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
                <TabsContent value="foryou" className={`w-full p-0 m-0`} >
                    <HeroForYou />
                </TabsContent>
                <TabsContent value="fashion" className={`w-full p-0 m-0`} >
                    <HeroFashion />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Hero