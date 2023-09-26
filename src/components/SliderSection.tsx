import React from 'react';
import AnimationOnView from './AnimationOnView';
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import card_shape from "../assets/ngc/shape-2.png";
import { CarouselCards } from "../content.json";


type CardProps = {
  title: string,
  subTitle: string,
  description: string,
}
const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className='relative w-full h-full p-8 bg-ngc_mid_orange' style={{direction: "rtl"}}>
      <img 
        src={card_shape} 
        alt='card_shape'
        className='absolute top-0 left-0 w-2/3 opacity-50 h-auto -scale-x-100'
      />
      <div className='h-full relative flex flex-col justify-around max-md:text-center'>
        <p className='text-ngc_secondary md:max-w-[14rem]'>{props.description}</p>
        <div>
          <h1 className='text-5xl font-semibold text-ngc_orange mb-2'>{props.title}</h1>
          <p className='text-md text-ngc_secondary'>{props.subTitle}</p>
        </div>
      </div>
    </div>
  )
}

const SliderSection = () => {
  
  return (
    <AnimationOnView>
      <div className="container max-w-6xl mx-auto px-2 mb-24">
        <h1 className="max-w-3xl mx-auto text-ngc_secondary text-3xl lg:text-6xl font-bold text-center mb-3 lg:mb-6 !leading-normal">
        مبــادرة استراتيجيـــة لتعزيـــز الأمن الغذائي فــي الممـلـكة
        </h1>

        <div className="slider-section" style={{direction: "ltr"}}>
          <Flicking moveType="snap" plugins={[new Arrow()]} align="center" defaultIndex={2}>
            {
              CarouselCards.map((card, index) => (
                <div key={index} className='w-full md:w-1/2 lg:w-2/6 h-64 mr-0 md:mr-4 lg:mr-6 rounded-2xl overflow-hidden'>
                  <Card
                    title={card.Title}
                    subTitle={card.SubTitle}
                    description={card.Description}
                  />
                </div>
              ))
            }
            <ViewportSlot>
              <span className="flicking-arrow-prev before:bg-ngc_orange after:bg-ngc_orange"></span>
              <span className="flicking-arrow-next before:bg-ngc_orange after:bg-ngc_orange"></span>
            </ViewportSlot>
          </Flicking>
        </div>
      </div>
    </AnimationOnView>
  )
}

export default SliderSection