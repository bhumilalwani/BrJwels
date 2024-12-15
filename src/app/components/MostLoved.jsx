'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MostLoved = () => {
    const [likedStones, setLikedStones] = useState({});

    const birthstones = [
        { name: 'Garnet', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Amethyst', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Aquamarine', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Diamond', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Emerald', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Pearl', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Ruby', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Peridot', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
    ];

    const numberToRemove = Math.floor(birthstones.length / 5); // 1/5th of the array length
    const slicedBirthstones = birthstones.slice(numberToRemove); // Remove 1/5th of the array

    const LikeHandler = (stoneName) => {
        setLikedStones((prevLiked) => ({
            ...prevLiked,
            [stoneName]: !prevLiked[stoneName],
        }));
    };

    return (
        <div className="bg-white">
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-normal mb-8 text-center">Most Loved On BR</h2>

                    <div className="relative">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            modules={[Pagination, Navigation]}
                            breakpoints={{
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                }
                            }}
                            className="mySwiper"
                        >
                            {slicedBirthstones.map((stone, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative group text-left hover:shadow-lg p-4">
                                        <Link href="/productDetails/hsbcs" className="block">
                                            <img
                                                src={stone.image}
                                                alt={stone.name}
                                                className="w-full scale-75 h-auto object-cover mb-4 transition-transform duration-1000 transform hover:scale-100"
                                            />
                                            <div className="absolute right-6 top-6">
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        LikeHandler(stone.name);
                                                    }}
                                                    className="bg-white rounded-full p-2 shadow-md"
                                                >
                                                    <i
                                                        className={`${
                                                            likedStones[stone.name]
                                                                ? 'ri-heart-fill text-red-500'
                                                                : 'ri-heart-line text-gray-500'
                                                        } text-xl`}
                                                    ></i>
                                                </button>
                                            </div>
                                            <h3 className="font-semibold text-lg">{stone.name}</h3>
                                            <p className="text-gray-500 text-sm mb-2">Birthstone description</p>
                                            <p className="font-bold text-lg">$1,999.9</p>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-pagination absolute bottom-0 left-0 w-full text-center py-4"></div>
                        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 shadow-md"></div>
                        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 shadow-md"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MostLoved;
