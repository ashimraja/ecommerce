import React from 'react'
import Title from '../components/Title'
import { assets } from '../assests/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio, doloribus eum inventore, dolor vel, obcaecati autem ipsam quae facilis illum id nobis perferendis. Obcaecati quis ratione aut enim ducimus?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste illum vitae voluptate hic cum fugit! Iure eos ab repellendus asperiores quo at, natus ex deleniti consequatur exercitationem delectus optio illum.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum veritatis doloribus dicta aperiam optio labore, modi eligendi ad dolores ipsam cumque, deserunt quae qui aspernatur quam quod amet. A.</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti animi, beatae sequi dolores deserunt excepturi fuga placeat consequuntur perspiciatis, tenetur consectetur omnis recusandae temporibus earum, quae vero laborum mollitia!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti animi, beatae sequi dolores deserunt excepturi fuga placeat consequuntur perspiciatis, tenetur consectetur omnis recusandae temporibus earum, quae vero laborum mollitia!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti animi, beatae sequi dolores deserunt excepturi fuga placeat consequuntur perspiciatis, tenetur consectetur omnis recusandae temporibus earum, quae vero laborum mollitia!</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About