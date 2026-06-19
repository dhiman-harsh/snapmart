import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import one from "../../assets/images/foryou/one.jpg"
import two from "../../assets/images/foryou/two.jpg"
import three from "../../assets/images/foryou/three.jpg"
import four from "../../assets/images/foryou/four.jpg"
import five from "../../assets/images/foryou/five.jpg"
import six from "../../assets/images/foryou/six.jpg"
import seven from "../../assets/images/foryou/seven.jpg"
import eight from "../../assets/images/foryou/eight.jpg"
import nine from "../../assets/images/foryou/nine.jpg"
import ten from "../../assets/images/foryou/ten.jpg"

import banner1 from "../../assets/images/foryou/banner1.jpg"
import banner2 from "../../assets/images/foryou/banner2.jpg"

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