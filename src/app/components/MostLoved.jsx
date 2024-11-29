'use client'
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
            [stoneName]: !prevLiked[stoneName],  // Toggle liked state
        }));
    };

    return (
        <div>
            <section className="section-gap py-10 bg-gray-100">
                <div className="container mx-auto text-center drop-shadow-xl cursor-pointer sm:px-[10vh]">
                    <h2 className="text-2xl font-bold mb-8">Most Loved On BR</h2>
                    <div className="relative ">
                        <div className="flex overflow-hidden">
                            <div
                                className="flex transition-transform hover:-top-[10px] ease-in-out duration-300"
                                style={{
                                    transform: `translateX(-${currentIndex * 140}px)`,
                                }}
                            >
                                {birthstones.map((stone, index) => (
                                    <div
                                        key={index}
                                        className="birthstone-card relative min-w-[305px] w-fit mx-2 text-center bg-white p-4 rounded-lg shadow-lg"
                                    >
                                        <img
                                            src={stone.image}
                                            alt={stone.name}
                                            className="sm:w-24 sm:h-24 w-20 h-20 rounded-full mx-auto mb-4"
                                        />
                                        <i
                                            onClick={() => LikeHandler(stone.name)}
                                            className={`ri-heart-line absolute left-[278px] top-[10px] cursor-pointer font-extralight text-lg ${likedStones[stone.name] ? 'text-pink-700' : 'text-gray-500'}`}
                                        ></i>
                                        <p className="font-semibold">{stone.name}</p>
                                        <p className="text-gray-500 text-sm">Birthstone description</p>
                                        <h3>$1,999.9</h3>
                                        <button className="px-[80px] mt-[5vh] py-[10px] border-[1.5px] border-solid border-black whitespace-nowrap">
                                            Customize Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                            <button
                                onClick={prevSlide}
                                className="carousel-button text-gray-800 text-2xl rounded-full p-2"
                            >
                                &lt;
                            </button>
                        </div>
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                            <button
                                onClick={nextSlide}
                                className="carousel-button text-gray-800 text-2xl rounded-full p-2"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MostLoved;
