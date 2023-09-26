// import React from 'react';
import AnimationOnView from './AnimationOnView';
import background_card_image_1 from '../assets/ngc/goal_1.png';
import background_card_image_2 from '../assets/ngc/goal_2.png';
import background_card_image_3 from '../assets/ngc/goal_3.png';
import background_card_image_4 from '../assets/ngc/goal_4.png';


const Card = (props: {title: string, description: string, src: string}) => {
  return (
    <div className='group relative bg-gradient-to-b from-transparent to-ngc_dark aspect-video rounded-3xl overflow-hidden'>
      <img src={props.src} alt="icon" className='group-hover:scale-110 transition-all w-full h-full absolute top-0 left-0 object-cover' />
      <div className='relative h-full flex flex-col justify-end text-white p-4 lg:p-8'>
        <h3 className='text-2xl lg:text-4xl mb-2 font-bold'>{props.title}</h3>
        <p className='text-sm lg:text-lg font-thin leading-tight text-justify'>{props.description}</p>
      </div>
    </div>
  )
}
const GoalsSection = () => {
  return (
    <AnimationOnView>
      <div id="our-goals" className="container max-w-6xl mx-auto px-2 mb-36">
        <h1 className="max-w-3xl mx-auto text-ngc_secondary text-3xl lg:text-6xl font-bold text-center mb-3 lg:mb-6 !leading-normal">
        أهدافنا
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
          <Card 
            title='تحقيق الأمن الغذائي'
            description='تحقيق الأمن الغذائي للمملكة من خلال توفير الحبوب الأساسية للمواطنين والمقيمين بكفاءة وجودة عالية وبأسعار منافسة.'
            src={background_card_image_1}
          />
          <Card 
            title='استيراد الحبوب'
            description='المساهمة الفعالة في عملية استيراد الحبوب ونقلها وتوزيعها مع التأكيد على تحقيق أعلى مستويات الجودة والكفاءة.'
            src={background_card_image_2}
          />
          <Card 
            title='استقرار السوق'
            description='تعزيز سلاسل الإمداد وضمان استقرار الأسعار في المملكة، وتحسين وصول الحبوب وتوافرها للمستهلك.'
            src={background_card_image_3}
          />
          <Card 
            title='الدعم اللوجستي'
            description='تقديم الدعم اللوجستي الكامل لجميع المستوردين سواء من القطاع العام أو الخاص، لتحسين سرعة الاستيراد والتخزين.'
            src={background_card_image_4}
          />
        </div>
      </div>
    </AnimationOnView>
  )
}

export default GoalsSection