import LeagueofLegends from "@/assets/LeagueofLegends.jpg";
import Fortnite from "@/assets/fortnite.jpg";
import CallofDuty from "@/assets/CallofDuty.jpg"
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

export function Carrossel() {
    return (
        <Carousel indicators={false} pause={'hover'} controls={false}>
            <CarouselItem className="tw-bg-black">
                <Image src={LeagueofLegends} alt="Imagem" className="tw-opacity-70 tw-h-[100vh] tw-max-h-[900px] tw-object-cover" />
                <CarouselCaption className="tw-top-[50%] tw-translate-y-[-50%] tw-flex tw-justify-center tw-flex-col">
                    <h3>League of Legends</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem className="tw-bg-black">
                <Image src={Fortnite} alt="Imagem" className="tw-opacity-70 tw-h-[100vh] tw-max-h-[900px] tw-object-cover" />
                <CarouselCaption className="tw-top-[50%] tw-translate-y-[-50%] tw-flex tw-justify-center tw-flex-col">
                    <h3>Fortnite</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem className="tw-bg-black">
                <Image src={CallofDuty} alt="Imagem" className="tw-opacity-70 tw-h-[100vh] tw-max-h-[900px] tw-object-cover" />
                <CarouselCaption className="tw-top-[50%] tw-translate-y-[-50%] tw-flex tw-justify-center tw-flex-col">
                    <h3>Call of Duty</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur
                    </p>
                </CarouselCaption>
            </CarouselItem>
        </Carousel >
    );
}