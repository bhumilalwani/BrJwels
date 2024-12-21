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
        { name: 'Amethyst', image: 'https://assets.angara.com/earrings/lse0976d/6.4mm-fgvs-lab-grown-diamond-18k-white-gold-earrings.jpg?width=256&quality=95' },
        { name: 'Aquamarine', image: 'https://assets.angara.com/pendant/sp1084aqd/6mm-aaaa-aquamarine-white-gold-pendant.jpg?width=256&quality=95' },
        { name: 'Diamond', image: 'https://assets.angara.com/pendant/sp0448op/10x7mm-aaaa-opal-yellow-gold-pendant.jpg?width=256&quality=95' },
        { name: 'Emerald', image: 'https://assets.angara.com/pendant/sp0169s/7x5mm-aaa-blue-sapphire-white-gold-pendant.jpg?width=256&quality=95' },
        { name: 'Pearl', image: 'https://assets.angara.com/pendant/sp0169s/7x5mm-aaa-blue-sapphire-white-gold-pendant.jpg?width=256&quality=95' },
        { name: 'Ruby', image: 'https://assets.angara.com/pendant/sp0169s/7x5mm-aaa-blue-sapphire-white-gold-pendant.jpg?width=256&quality=95' },
        { name: 'Peridot', image: 'https://assets.angara.com/pendant/sp0169s/7x5mm-aaa-blue-sapphire-white-gold-pendant.jpg?width=256&quality=95' },
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
                    <h2 className="text-2xl font-normal text-[var(--headings-color)] mb-8 text-center">Most Loved On BR</h2>

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
                                    <div className="relative group text-left hover:shadow-lg p-4 w-fit">
                                        <Link href="/productDetails/hsbcs" className="block w-[70%] ml-4">
                                            <img
                                                src={stone.image}
                                                alt={stone.name}
                                                className="scale-75 mb-4 transition duration-1000 transform hover:scale-90"
                                            />
                                            <div className="absolute right-6 top-6">
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        LikeHandler(stone.name);
                                                    }}
                                                    className="bg-white rounded-full px-2 py-1 shadow-md"
                                                >
                                                    <i
                                                        className={`${
                                                            likedStones[stone.name]
                                                                ? 'ri-heart-fill text-black'
                                                                : 'ri-heart-line text-[var(--primary-800)]'
                                                        } text-xl`}
                                                    ></i>
                                                </button>
                                            </div>
                                            <h3 className="font-semibold text-[var(--primary-color)] text-lg">{stone.name}</h3>
                                            <p className="text-[var(--primary-800)] text-sm mb-2">Birthstone description</p>
                                            <p className="font-semibold text-lg text-[var(--headings-color)]">$1,999.9</p>
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
