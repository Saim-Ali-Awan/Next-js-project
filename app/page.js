"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Web Designer"],
      typeSpeed: 50,
    });

    return () => typed.destroy();
  }, []);

  const handleButtonClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // auto-close alert after 3 seconds
  };

  return (
    <main>
      {/* 🔴 ALERT - Destructive */}
      {showAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
          <Alert variant="destructive">
            <AlertTitle>We are Sorry!</AlertTitle>
            <AlertDescription>This page is not ready.</AlertDescription>
          </Alert>
        </div>
      )}

      {/* ✅ Hero Section */}
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center dark:bg-[#101828]">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">School Student</span>
            <br className="hidden lg:block" />
            Saim Ali{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            A Full stack Web Developer from Pakistan.
            <br className="hidden lg:block" /> Contact me if you want me to build
            sites.
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="Website Designer"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* ✅ Pricing Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Choose the plan that suits you best
            </p>
          </div>

          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <PlanCard
              title="Basic"
              price="$10/month"
              features={["Community Access", "Weekly Updates"]}
              crossed={["10GB Storage", "Basic Support", "Single User"]}
              onClick={handleButtonClick}
            />

            {/* Standard Plan */}
            <PlanCard
              title="Standard"
              price="$20/month"
              badge="Bestseller"
              features={[
                "50GB Storage",
                "Priority Support",
                "Up to 5 Users",
                "Community Access",
                "Daily Updates",
              ]}
              onClick={handleButtonClick}
              highlight
            />

            {/* Premium Plan */}
            <PlanCard
              title="Premium"
              price="$30/month"
              features={[
                "200GB Storage",
                "24/7 Support",
                "Unlimited Users",
                "Community Access",
                "Real-time Updates",
              ]}
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </section>

      {/* ✅ Blog Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Check out our most popular blog posts
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <BlogCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1o2fA2Hp8xMMgSh4uH7LeH30Gud9c9pJlA&s"
              title="Learn TypeScript"
              description="Learn TypeScript with me; it is a very commonly used programming language."
              onClick={handleButtonClick}
            />
            {/* Blog 2 */}
            <BlogCard
              image="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Learn AI"
              description="Learn AI with me and explore the future of intelligent technology."
              onClick={handleButtonClick}
            />
            {/* Blog 3 */}
            <BlogCard
              image="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
              title="Typing Tips"
              description="Experts say you can save about 21 days a year if you type faster."
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

// ✅ Reusable Pricing Card
function PlanCard({ title, price, features, crossed = [], badge, onClick, highlight = false }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div
        className={`p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 ${
          highlight ? "border-2 border-purple-500 bg-white dark:bg-gray-800" : "bg-white dark:bg-gray-800"
        }`}
      >
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        <p className="mt-4 text-gray-500 dark:text-gray-300">{price}</p>
        {badge && (
          <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
            {badge}
          </span>
        )}
        <ul className="mt-6 mb-6 space-y-4">
          {crossed.map((item, i) => (
            <li key={i} className="text-gray-600 dark:text-gray-400 line-through">
              {item}
            </li>
          ))}
          {features.map((item, i) => (
            <li key={i} className="text-gray-600 dark:text-gray-400">
              {item}
            </li>
          ))}
        </ul>
        <Button className="mx-1" variant="outline" onClick={onClick}>
          Choose Plan
        </Button>
      </div>
    </div>
  );
}

// ✅ Reusable Blog Card
function BlogCard({ image, title, description, onClick }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
          <Button className="m-2" variant="outline" onClick={onClick}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
