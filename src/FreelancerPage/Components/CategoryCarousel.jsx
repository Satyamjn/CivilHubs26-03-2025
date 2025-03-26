import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { useNavigate } from 'react-router-dom';

const category = [
    "Structural Engineer",
    "Surveyor",
    "Civil Engineer",
    "Architect", 
    "Project Engineer",
    "Site Engineer",
    "Urban Planner",
    "Hydraulic Engineer",
    "Materials Engineer",
    "Building Inspector",
    "Cost Estimator",
    "Roadway Engineer",
    "Bridge Engineer",
];

const CategoryCarousel = () => {
    const navigate = useNavigate();
    const [api, setApi] = useState(null);

    const searchJobHandler = (query) => {
        navigate("/BrowseDetail", { state: { query: query } });
    };

    useEffect(() => {
        if (!api) return;

        const autoplayInterval = setInterval(() => {
            if (api.canScrollNext()) {
                api.scrollNext();
            } else {
                api.scrollTo(0);
            }
        }, 1000);

        api.on("pointerDown", () => clearInterval(autoplayInterval));

        return () => clearInterval(autoplayInterval);
    }, [api]);

    return (
        <div className="max-w-9xl -my-9">
            <Carousel className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-5xl mx-auto my-20 bg-opacity-50 rounded-lg p-4">
                <CarouselContent>
                    {category.map((cat, index) => (
                        <CarouselItem 
                            key={index} 
                            className="flex justify-center gap-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                        >
                            <button 
                                onClick={() => searchJobHandler(cat)} 
                                className="rounded-full text-sm sm:text-base px-2 py-2 w-full font-bold text-black shadow-md backdrop-blur-lg bg-white"
                            >
                                {cat}
                            </button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default CategoryCarousel;