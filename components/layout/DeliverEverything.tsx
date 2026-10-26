import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const DeliverEverything = () => {
  return (
    <div className="mx-3 md:mx-7 lg:mx-14 my-20">
      <div className="md:flex justify-between items-center">
        <h1 className="font-rubik text-4xl md:text-2xl lg:text-4xl font-semibold">
          More of What You Need, <br /> All in{" "}
          <span className="text-munchprimary">One Place</span>
        </h1>
        <p className="mt-5 md:mt-0">
          From Freshly prepared meals to groceries and everyday essentials,
          MunchSpace <br className="hidden md:inline" /> makes it easier to get
          what you need without the extra trip.
        </p>
      </div>
      <div className="grid md:grid-cols-3 mt-15 gap-15 md:gap-3 lg:gap-30">
        <div className="px-10 md:px-3 lg:px-10">
          <Image
            width={1000}
            height={1000}
            alt="order"
            className="mx-auto w-full h-auto"
            src={
              "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767346390/11_e1pjeh.png"
            }
          />
          <h3 className="font-semibold font-rubik text-center text-2xl md:text-xl lg:text-2xl mt-7">
            Restaurants
          </h3>
          <p className="mt-5 md:mt-0 text-munchgreen  flex items-center justify-center">
            Discover meals from your favourite restaurants. Browse available
            options, compare prices, and get your order delivered to your door.
          </p>
        </div>
        <div className="px-10 md:px-3 lg:px-10">
          <Image
            width={1000}
            height={1000}
            alt="order"
            className="mx-auto w-full h-auto"
            src={
              "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767346274/21_jdqcq0.png"
            }
          />
          <h3 className="font-semibold font-rubik text-center md:text-xl lg:text-2xl text-2xl mt-7">
            Pharmacy Delivery
          </h3>
          <p className="mt-5 md:mt-0 text-munchgreen  flex items-center justify-center">
            Get access to participating pharmacies and the everyday health
            essentials they offer.
          </p>
        </div>
        <div className="px-10 md:px-3 lg:px-10">
          <Image
            width={1000}
            height={1000}
            alt="order"
            className="mx-auto w-full h-auto"
            src={
              "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767346300/31_h0axaj.png"
            }
          />
          <h3 className="font-semibold font-rubik text-center text-2xl md:text-xl lg:text-2xl mt-7">
            Local Market Delivery
          </h3>
          <p className="mt-5 md:mt-0 text-munchgreen  flex items-center justify-center">
            Shop everyday groceries and household essentials from participating
            local markets. Find what you need, place your order, and have it
            brought to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliverEverything;
