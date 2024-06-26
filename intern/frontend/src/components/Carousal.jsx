import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000
    }
    const images =[
        'https://pcdn.sharethis.com/wp-content/uploads/2020/06/Blog_eCommerce_060120_WP-2.png',
        'https://mettlesoft.com.au/wp-content/uploads/2020/10/e-commerce-website.jpg',
        'https://mediamodifier.com/blog/wp-content/uploads/2019/08/3d-ecommerce-website-mockup-with-cart-and-shopping-bags-free-online-mockup-generator-psd-template.jpg'
    ];
  return (
    <div className='w-3/4 m-auto'>
      <Slider {...settings}>
        {images.map((image,index)=>(
            <div className='bg-white h-[400px] flex justify-center' key={index}>
                <img src={image} alt={`Slide ${index}`} className='w-full h-full object-cover' />

            </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousal

