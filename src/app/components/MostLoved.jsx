'use client';
import React, { useState } from 'react';

const MostLoved = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedStones, setLikedStones] = useState({});

    const birthstones = [
        { name: 'Garnet', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Amethyst', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Aquamarine', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Diamond', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Garnet', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Amethyst', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Aquamarine', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Diamond', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % birthstones.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? birthstones.length - 1 : prevIndex - 1));
    };

    const LikeHandler = (stoneName) => {
        setLikedStones((prevLiked) => ({
            ...prevLiked,
            [stoneName]: !prevLiked[stoneName], // Toggle liked state
        }));
    };

    return (
        <div>
            <section className="section-gap py-10 bg-gray-100">
                <div className="container mx-auto text-center sm:px-[10vh]">
                    <h2 className="text-2xl font-normal mb-8">Most Loved On BR</h2>
                    <div className="relative flex justify-center items-center">
                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 text-gray-800 text-2xl rounded-full p-2 z-10"
                        >
                            &lt;
                        </button>

                        {/* Slider */}
                        <div className="relative w-[80%] overflow-hidden">
                            <div
                                className="flex transition-transform ease-in-out duration-300 gap-[20px]"
                                style={{
                                    transform: `translateX(-${currentIndex * 140}px)`,
                                }}
                            >
                                {birthstones.map((stone, index) => (
                                    <div
                                        key={index}
                                        className="relative w-fit text-left bg-white px-[6%] sm:px-10 py-6 rounded-lg hover:shadow-lg"
                                    >
                                        <img
                                            src={stone.image}
                                            alt={stone.name}
                                            className="sm:w-24 sm:h-24 w-[40%] h-[40%] rounded-full mx-auto mb-4"
                                        />
                                        <i
                                            onClick={() => LikeHandler(stone.name)}
                                            className={`absolute right-[8%] top-[5%] cursor-pointer font-extralight text-lg ${
                                                likedStones[stone.name]
                                                    ? 'ri-heart-fill text-black-700' // Filled heart
                                                    : 'ri-heart-line text-gray-500' // Outlined heart
                                            }`}
                                        ></i>
                                        <p className="font-semibold">{stone.name}</p>
                                        <p className="text-gray-500 text-sm">Birthstone description</p>
                                        <h3>$1,999.9</h3>
                                        <button className="sm:px-[50px] px-[30px] mb-[2vh] mt-[4vh] py-[8px] border-[1.5px] border-solid border-black whitespace-nowrap">
                                            Customize Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 text-gray-800 text-2xl p-2 z-10"
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MostLoved;
