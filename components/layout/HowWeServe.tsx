import Image from "next/image";
import React from "react";

const HowWeServe = () => {
  return (
    <section className="">
      <div className="relative">
        <Image
          width={100}
          height={100}
          alt="fring eggs"
          className="absolute hidden md:block w-15 lg:w-fit"
          src={
            "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767348034/fryingeggs_b8xwzz.png"
          }
        />
        <h1 className="font-rubik font-semibold text-4xl lg:text-5xl text-center">
          How we <span className="text-munchprimary">Serve</span> you
        </h1>
      </div>
      <div className="grid md:grid-cols-3 mx-3 lg:mx-14 mt-15 gap-15 md:gap-5 lg:gap-30">
        <div className="px-10 md:px-3 lg:px-10">
          <Image
            width={500}
            height={500}
            alt="order"
            className="mx-auto w-full"
            src={
              "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767348077/order1_iyxozv.png"
            }
          />
          <h3 className="font-semibold font-rubik text-center text-2xl md:text-xl lg:text-2xl mt-7">
            Discover & Order
          </h3>
          <p className="mt-2 text-slate-700 md:text-sm lg:text-base text-center">
            Explore restaurants, browse menus and select the items you need. Add
            your choices to your cart and place your order in just a few simple
            steps.
          </p>
        </div>
        <div className="px-10 md:px-3 lg:px-10">
          <Image
            width={500}
            height={500}
            alt="order"
            className="mx-auto w-full"
            src={
              "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767348077/pack1_mf8kwr.png"
            }
          />
          <h3 className="font-semibold font-rubik text-center text-2xl md:text-xl lg:text-2xl mt-7">
            Your Order Is Prepared
          </h3>
          <p className="mt-2 text-slate-700 md:text-sm lg:text-base text-center">
            The restaurant or store prepares your order, with care taken to
            ensure the selected items are ready for collection
          </p>
        </div>
        <div className="px-10 md:px-3 lg:px-10">
          <Image
            width={500}
            height={500}
            alt="order"
            className="mx-auto w-full"
            src={
              "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767348077/deliver1_nfqrji.png"
            }
          />
          <h3 className="font-semibold font-rubik text-center text-2xl mt-7  md:text-xl lg:text-2xl">
            Delivered to Your Door
          </h3>
          <p className="mt-2 text-slate-700 md:text-sm lg:text-base text-center">
            Our rider deliver right to your door. Fresh, fast, and always on
            time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeServe;
