import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import one from "../../assets/images/one.jpg"
import two from "../../assets/images/two.jpg"
import three from "../../assets/images/three.jpg"
import four from "../../assets/images/four.jpg"
import five from "../../assets/images/five.jpg"
import six from "../../assets/images/six.jpg"
import seven from "../../assets/images/seven.jpg"
import eight from "../../assets/images/eight.jpg"
import nine from "../../assets/images/nine.jpg"
import ten from "../../assets/images/ten.jpg"

import banner1 from "../../assets/images/banner1.jpg"
import banner2 from "../../assets/images/banner2.jpg"

const Hero = () => {
    return (
        <div className="min-h-dvh">
            <img src={`${banner1}`} alt="banner 1" className="pb-4" />
            <Carousel className="pb-4">
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                        <img src={`${one}`} alt="one" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${two}`} alt="two" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${four}`} alt="four" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${five}`} alt="five" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${nine}`} alt="nine" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${ten}`} alt="ten" className="rounded-md" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <img src={`${banner2}`} alt="banner 2" className="pb-4" />
        </div>
    )
}

export default Hero