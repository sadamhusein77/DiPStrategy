import React from "react";
import Button from "../component/Button";

export default function ArticlePortfolio({onCaseStudy}) {
  return (
    <section id="portfolio" className="mt-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-3/5 text-6xl">PORTFOLIO</div>
          <div className="w-2/5 flex items-center">
            <div className="text-xs">
              Take a look at our most successful projects and see for yourself
              our skills and the results that speak for themselves.
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
        <div className="flex items-center justify-center">
          <div className="w-2/5">
            <div className="text-xl text-slate-300">CUSTOM WEB DEVELOPMENT</div>
            <div className="text-4xl">
                HANA BANK <br />
                Website
            </div>
            <ul className="list-decimal marker:text-black mt-5 pl-5">
              <li>2017 Webby Award Winner for Best Shopping App</li>
              <li>DSC was reportedly acquired by Unilever for $1 billion</li>
              <li>4.8 Google Play Reviews</li>
              <li>97% of app users would recommend the DSC app to a friend</li>
            </ul>
            <div className="mt-8">
                <Button
                color={`bg-yellow-300`}
                name={`CASE STUDY`}
                size={`w-40`}
                height={`h-10`}
                onHandleClick={() => onCaseStudy(99)}
                />
            </div>
          </div>
          <div className="w-3/5">
            <img
              src="images/portfolio.png"
              alt="portfolio"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-14">
          <div className="w-3/5">
            <img
              src="images/portfolio-2.png"
              alt="portfolio"
              className="w-full"
            />
          </div>
          <div className="w-2/5">
            <div className="text-xl text-slate-300">DESIGN UI/UX</div>
            <div className="text-4xl">
                BASF WEB DESIGN
            </div>
            <ul className="list-decimal marker:text-black mt-5 pl-5">
              <li>2017 Webby Award Winner for Best Shopping App</li>
              <li>DSC was reportedly acquired by Unilever for $1 billion</li>
              <li>4.8 Google Play Reviews</li>
              <li>97% of app users would recommend the DSC app to a friend</li>
            </ul>
            <div className="mt-8">
                <Button
                color={`bg-yellow-300`}
                name={`CASE STUDY`}
                size={`w-40`}
                height={`h-10`}
                onHandleClick={() => onCaseStudy(99)}
                />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-14">
          <div className="w-2/5">
            <div className="text-xl text-slate-300">E-COMMERCE DEVELOPMENT</div>
            <div className="text-4xl">
                Open Fashion Mobile App
            </div>
            <ul className="list-decimal marker:text-black mt-5 pl-5">
              <li>2021 App Award Winner for Best Maid App</li>
              <li>DSC was reportedly acquired by Unilever for $1 billion</li>
              <li>4.8 Google Play Reviews</li>
              <li>4.8 App Store Reviews</li>
              <li>97% of app users would recommend the DSC app to a friend</li>
            </ul>
            <div className="mt-8">
                <Button
                color={`bg-yellow-300`}
                name={`CASE STUDY`}
                size={`w-40`}
                height={`h-10`}
                onHandleClick={() => onCaseStudy(99)}
                />
            </div>
          </div>
          <div className="w-3/5">
            <img
              src="images/portfolio-3.png"
              alt="portfolio"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
