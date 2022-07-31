import React from "react";

export default function ArticlePortfolio() {
  return (
    <section id="portfolio">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
            <div className="w-3/5 text-6xl">PORTFOLIO</div>
            <div className="w-2/5 flex items-center">
                <div className="text-xs">
                Take a look at our most successful projects and see for yourself our skills and the results that speak for themselves.
                </div>
                <div className="flex items-end">
                    <div className="ml-2 text-6xl">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="ml-2 text-6xl">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex">
            <div id="controls-carousel" className="relative" data-carousel="static">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla esse quae necessitatibus consequatur ex corrupti error vel tenetur magni?
                    </div>
                    <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla esse quae necessitatibus consequatur ex corrupti error vel tenetur magni?
                    </div>
                    <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                        <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
                        <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
                        <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
      </div>
    </section>
  );
}
