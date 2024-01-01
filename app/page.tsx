'use client'
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Playfair_Display } from 'next/font/google';
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { Progress } from "@/components/ui/progress"
import { CarouselApi} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import {useState, useEffect} from 'react'

const googleFont = Playfair_Display({
  weight: '400',
  subsets: ['latin'] // Add this line
});

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

const ResponsiveCarouselButtons = () => {
  const width = useWindowWidth();
  const isMobile = width < 768; // You can adjust this threshold

  if (isMobile) {
    return null; // Don't render anything on mobile devices
  }

  return (
    <>
      <CarouselPrevious />
      <CarouselNext />
    </>
  ); // Render your component on non-mobile devices
};




export default function Home() {

    const [api, setApi] = useState<CarouselApi>()
    const [progress, setProgress] = useState(0)
    const [numberOfCards, setNumberOfCards] = useState(0)

    

    useEffect(() => {
      if (!api) {
        return;
      }
     
      setNumberOfCards(api.slideNodes().length-1)
      const handleSelect = (api: CarouselApi) => {
        const slideProgress = Math.round(((api.selectedScrollSnap())/(api.slideNodes().length-1)) * 100)
        setProgress(slideProgress);
      };
    
      api.on("select", handleSelect);
    
      // Cleanup function
      return () => {
        api.off("select", handleSelect);
      };
    }, [api]);
    

    return (
      <div className="">
        <div className={`${googleFont.className} text-center flex justify-center pl-8 pr-8 mt-20 lg:mt-40 mb-20 lg:mb-40 text-7xl lg:text-8xl`}><h1>Beautiful Cards</h1></div>
      <div className="flex items-center justify-center">
        <div>
          <div className="flex items-center justify-center">
            <Progress className="w-32 mb-4 bg-stone-200 bg-opacity-30 h-[6px]" value={progress} indicatorColor="bg-stone-200"/>
          </div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
          }}
          className="w-screen md:max-w-md lg:max-w-lg"
        >
          <CarouselContent >
            <CarouselItem >
              <Card 
                className="m-4 border-none bg-[#f4f1ea] h-[350px] text-black shadow-lg rounded-lg relative"
              >
                <BookmarkFilledIcon className="absolute top-0 left-0 size-20"/>
                <CardHeader 
                  className="flex items-center justify-center h-full"
                >
                  <h2
                    className={`${googleFont.className} text-3xl text-center p-8`}
                  >
                    The best Japanese proverbs of our time.
                  </h2>
                  <Badge className="bg-white text-black bg-opacity-70 hover:bg-stone-200 hover:bg-opacity-75 font-light rounded-xl">{numberOfCards} cards</Badge>
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="">
            <Card 
                className="m-4 border-none bg-[#f4f1ea] h-[350px] text-black shadow-lg rounded-lg relative"
              >
                <CardHeader>
                  <h2
                    className={`${googleFont.className} text-3xl text-center p-8 pb-4`}
                  >
                    Japanese Legend
                  </h2>
                </CardHeader>
                <CardContent>
                  <p>
                    There’s a Japanese legend that says,
                    “If you feel like you’re losing everything,
                    remember, trees lose their leaves every year,
                    <span className="bg-[#ffff88] p-0.5">yet they still stand tall and</span>
                    <span className="bg-[#ffff88] p-0.5">wait for better days to come.”</span>

                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem >
            <Card 
                className="m-4 border-none bg-[#f4f1ea] h-[350px] text-black shadow-lg rounded-lg relative"
              >
                <CardHeader>
                  <h2
                    className={`${googleFont.className} text-3xl text-center p-8 pb-4`}
                  >
                    Fall serven times, stand up eight
                  </h2>
                </CardHeader>
                <CardContent>
                  <p>
                    七転び八起き (Nana korobi ya oki).
                    Perseverance is key; keep trying despite repeated failures.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem >
              <Card 
                className="m-4 border-none bg-[#f4f1ea] h-[350px] text-black shadow-lg rounded-lg relative"
              >
                <CardHeader>
                  <h2
                    className={`${googleFont.className} text-3xl text-center p-8 pb-4`}
                  >
                    Regret comes after the fact
                  </h2>
                </CardHeader>
                <CardContent>
                  <p>
                  後悔先に立たず (Kōkai saki ni tatazu).
                  It's easy to regret something after it's done, but it's important to think before acting to avoid regret. This saying warns against rash decisions and encourages foresight.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem >
              <Card 
                className="m-4 border-none bg-[#f4f1ea] h-[350px] text-black shadow-lg rounded-lg relative"
              >
                <CardHeader>
                  <h2
                    className={`${googleFont.className} text-3xl text-center p-8 pb-4`}
                  >
                    The mouth is the source of disaster
                  </h2>
                </CardHeader>
                <CardContent>
                  <p>
                  口は災いの元 (Kuchi wa wazawai no moto).
                  Careless talk or words can cause a lot of trouble. It's akin to the English saying, "Loose lips sink ships," emphasizing the need for discretion.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem >
              <Card 
                className="m-4 border-none bg-[#f4f1ea] h-[350px] text-black shadow-lg rounded-lg relative"
              >
                <CardHeader>
                  <h2
                    className={`${googleFont.className} text-3xl text-center p-8 pb-4`}
                  >
                    What one learns in the cradle lasts till the tomb
                  </h2>
                </CardHeader>
                <CardContent>
                  <p>
                  三つ子の魂百まで (Mitsugo no tamashii hyaku made).
                  Early childhood education and experiences have a lasting impact throughout one's life.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <ResponsiveCarouselButtons />
      </Carousel>
        </div>
      </div>
      </div>
    )
}

