'use client'
import React, { useRef, useState } from 'react';
import Link from 'next/link'; // Ensure to import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';
const reviews = [
  {
    title: 'Beautiful!',
    description: 'Beautiful!',
    imageUrl:
      'https://assets.angara.com/bracelet/sb0425d/3mm-hsi2-diamond-yellow-gold-bracelet.jpg?width=256&quality=95',
    productUrl: '/p/graduated-bezel-set-diamond-bolo-bracelet-sb0425d',
    rating: 5,
    customerName: 'Robert V.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Ring',
    description: 'Beautiful ring, so amazing.',
    imageUrl:
      'https://assets.angara.com/ring/sr1437d/5.1mm-iji1i2-diamond-p950-platinum-ring.jpg?width=256&quality=95',
    productUrl: '/p/solitaire-round-diamond-infinity-promise-ring-sr1437d',
    rating: 5,
    customerName: 'Brooklyn H.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Beautiful!',
    description: 'Beautiful!',
    imageUrl:
      'https://assets.angara.com/bracelet/sb0425d/3mm-hsi2-diamond-yellow-gold-bracelet.jpg?width=256&quality=95',
    productUrl: '/p/graduated-bezel-set-diamond-bolo-bracelet-sb0425d',
    rating: 5,
    customerName: 'Robert V.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Ring',
    description: 'Beautiful ring, so amazing.',
    imageUrl:
      'https://assets.angara.com/ring/sr1437d/5.1mm-iji1i2-diamond-p950-platinum-ring.jpg?width=256&quality=95',
    productUrl: '/p/solitaire-round-diamond-infinity-promise-ring-sr1437d',
    rating: 5,
    customerName: 'Brooklyn H.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Beautiful!',
    description: 'Beautiful!',
    imageUrl:
      'https://assets.angara.com/bracelet/sb0425d/3mm-hsi2-diamond-yellow-gold-bracelet.jpg?width=256&quality=95',
    productUrl: '/p/graduated-bezel-set-diamond-bolo-bracelet-sb0425d',
    rating: 5,
    customerName: 'Robert V.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Ring',
    description: 'Beautiful ring, so amazing.',
    imageUrl:
      'https://assets.angara.com/ring/sr1437d/5.1mm-iji1i2-diamond-p950-platinum-ring.jpg?width=256&quality=95',
    productUrl: '/p/solitaire-round-diamond-infinity-promise-ring-sr1437d',
    rating: 5,
    customerName: 'Brooklyn H.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Beautiful!',
    description: 'Beautiful!',
    imageUrl:
      'https://assets.angara.com/bracelet/sb0425d/3mm-hsi2-diamond-yellow-gold-bracelet.jpg?width=256&quality=95',
    productUrl: '/p/graduated-bezel-set-diamond-bolo-bracelet-sb0425d',
    rating: 5,
    customerName: 'Robert V.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Ring',
    description: 'Beautiful ring, so amazing.',
    imageUrl:
      'https://assets.angara.com/ring/sr1437d/5.1mm-iji1i2-diamond-p950-platinum-ring.jpg?width=256&quality=95',
    productUrl: '/p/solitaire-round-diamond-infinity-promise-ring-sr1437d',
    rating: 5,
    customerName: 'Brooklyn H.',
    reviewDate: '29 Nov, 2024',
  },
  // Add more reviews if needed
];

const CustomerReview = () => {
  return (
    <section
      className="section-gap flex flex-col items-center justify-center py-[10%] bg-gray-50"
      
    >
      <div className="container text-center px-4 sm:px-8">
        <div className="inner-container">
          <div className="section-heading mb-8">
            <h2 className="sm:text-2xl text-[var(--headings-color)] text-xl font-semibold mb-2">What Customers Are Saying</h2>
           
          </div>
          <div className="review-block">
            <div className="slick-slider" dir="ltr">
              <div className="slick-list flex items-center justify-center">
                <div className="slick-track flex gap-6 overflow-x-auto scrollbar-hidden snap-x snap-mandatory">
                <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        zoom={true}
        centeredSlides={true}
        slidesPerView={3}
        navigation={true}
       breakpoints={{
        1000:{
            slidesPerView:3,
        },
        550:{
            slidesPerView:2
        },
        0:{
            slidesPerView:1
        }
       }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >{reviews.map((review, index) => (
        <SwiperSlide><div
                      key={index}
                      className="review-card-wrapper flex-shrink-0 w-72 sm:w-80 h-auto bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center snap-center"
                    >
                      <Link href={review.productUrl} className="text-blue-500 mb-4">
                        <img
                          alt={review.title}
                          src={review.imageUrl}
                          className="w-32 h-32 object-contain"
                          loading="lazy"
                        />
                      </Link>
                      <div className="title text-lg text-[var(--headings-color)] font-medium">{review.title}</div>
                      <div className="review-stars my-2">
                        <div className="star-rating">
                          <span className="half-star text-[var(--gold)]">★★★★★</span>
                          {/* <span className="full-star text-[var(--gold)]" style={{ width: '100%' }}>
                            ★★★★★
                          </span> */}
                        </div>
                      </div>
                      <div className="customer-review text-[var(--primary-800)] text-sm text-center">
                        {review.description}
                      </div>
                      <div className="customer-name text-[var(--primary-800)] font-semibold mt-4">
                        {review.customerName}{' '}
                        <span className="text-[var(--primary-800)] text-sm">({review.reviewDate})</span>
                      </div>
                    </div></SwiperSlide>
                  ))}</Swiper>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      <Link href="/b/customer-reviews" className="-ml-[10%] mt-[2%] text-blue-500 underline">
              Reviews
            </Link>
    </section>
  );
};

export default CustomerReview;
