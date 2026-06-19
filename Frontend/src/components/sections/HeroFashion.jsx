import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import backToCampus from "../../assets/images/fashion/backToCampus.jpg"
import blues from "../../assets/images/fashion/blues.jpg"
import denimDiscounts from "../../assets/images/fashion/denimDiscounts.jpg"
import fifaWorldCup from "../../assets/images/fashion/fifaWorldCup.jpg"
import kayano33 from "../../assets/images/fashion/kayano33.jpg"
import newLaunches from "../../assets/images/fashion/newLaunches.jpg"
import slayWorthyPicks from "../../assets/images/fashion/slayWorthyPicks.jpg"
import springSummer from "../../assets/images/fashion/springSummer.jpg"
import tokyoTalkies from "../../assets/images/fashion/tokyoTalkies.jpg"

const HeroFashion = () => {
    return (
        <div>
            <Carousel className="pb-4">
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                        <img src={`${denimDiscounts}`} alt="one" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${blues}`} alt="two" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${newLaunches}`} alt="four" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${slayWorthyPicks}`} alt="five" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${springSummer}`} alt="nine" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${kayano33}`} alt="ten" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${fifaWorldCup}`} alt="ten" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${backToCampus}`} alt="ten" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img src={`${tokyoTalkies}`} alt="ten" className="rounded-md" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default HeroFashion