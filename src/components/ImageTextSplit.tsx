import React from 'react';
import cn from 'classnames';
import AnimationOnView from './AnimationOnView';

type Props = {
  id?: string,
  imgUrl: string,
  subText: string,
  title: string,
  text: string,
  reverse?: boolean
}

const ImageTextSplit = (props: Props) => {

  return (
    <AnimationOnView>
      <div id={props.id} className='container max-w-6xl mx-auto px-2'>
        <div className={cn(
          "flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-12 justify-center",
          { 'md:flex-row-reverse': props.reverse }
        )}>
          <div className='w-full lg:w-1/2 rounded-t-2xl rounded-b-md lg:rounded-3xl overflow-hidden h-24 md:h-[550px] flex'>
            <img src={props.imgUrl} alt='image' className='w-full object-cover hover:scale-125 transition-all' />
          </div>
          <div className='w-full lg:w-1/2'>
            <div className="text-center md:text-right">
              <p className='text-base lg:text-xl text-ngc_secondary font-light lg:mb-4'>{props.subText}</p>
              <h2 className='text-xl md:text-3xl lg:text-5xl text-ngc_orange font-bold mb-2 lg:mb-8'>{props.title}</h2>
              <p className='text-base lg:text-xl text-ngc_secondary font-extralight leading-6 lg:!leading-10 text-justify'>{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimationOnView>
  )
}

export default ImageTextSplit