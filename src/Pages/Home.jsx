import React from "react";

import hero1 from "../assets/Hero01.jpg";
import hero2 from "../assets/Hero02.jpg";
import hero3 from "../assets/Hero03.jpg";

import dog1 from "../assets/Dog01.png";

import { FaShieldAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiHandHeartDuotone } from "react-icons/pi";

import cat1 from "../assets/Cat1.png";
import cat2 from "../assets/Cat2.png";
import cat3 from "../assets/Cat3.png";
import cat4 from "../assets/Cat4.png";

import Marquee from "react-fast-marquee";
import banner1 from "../assets/banner01.jpg";
import banner2 from "../assets/banner02.jpg";
import banner3 from "../assets/banner03.jpg";
import banner4 from "../assets/banner04.jpg";
import banner5 from "../assets/banner05.jpg";
import banner6 from "../assets/banner06.jpg";

const Home = () => {
  return (
    <div>
      <title>Home</title>

      {/* Banner Section */}
      <div className="md:w-6xl mx-auto py-[50px]">
        <Marquee speed={100}>
          <div className="card w-96 shadow-sm py-[20px] h-[200px]">
            <figure>
              <img src={banner1} alt="banners" />
            </figure>
          </div>

          <div className="card w-96 shadow-sm py-[20px]  h-[170px]">
            <figure>
              <img src={banner1} alt="banners" />
            </figure>
          </div>

          <div className="card w-96 shadow-sm py-[20px]  h-[170px]">
            <figure>
              <img src={banner2} alt="banners" />
            </figure>
          </div>

          <div className="card w-96 shadow-sm py-[20px]  h-[170px]">
            <figure>
              <img src={banner3} alt="banners" />
            </figure>
          </div>

          <div className="card w-96 shadow-sm py-[20px]  h-[170px]">
            <figure>
              <img src={banner4} alt="banners" />
            </figure>
          </div>

          <div className="card w-96 shadow-sm py-[20px]  h-[170px]">
            <figure>
              <img src={banner5} alt="banners" />
            </figure>
          </div>

          <div className="card w-96 shadow-sm py-[20px] h-[170px]">
            <figure>
              <img src={banner6} alt="banners" />
            </figure>
          </div>
        </Marquee>
      </div>

      {/* Catagories */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Shop by Category
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <a className="rounded-2xl bg-[#E9F8E0] p-4">
              <div className="overflow-hidden rounded-xl bg-white/30">
                <img
                  src={cat1}
                  alt="Pet Adoption"
                  className="h-56 w-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-base font-extrabold text-slate-900">
                  Pet Adoption
                </h3>
                <p className="mt-1 text-sm text-emerald-700/80">
                  Find your perfect companion
                </p>
              </div>
            </a>
            <a className="rounded-2xl bg-[#E9F8E0] p-4">
              <div className="overflow-hidden rounded-xl bg-white/30">
                <img
                  src={cat2}
                  alt="Pet Food"
                  className="h-56 w-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-base font-extrabold text-slate-900">
                  Pet Food
                </h3>
                <p className="mt-1 text-sm text-emerald-700/80">
                  Nutritious meals for every diet
                </p>
              </div>
            </a>
            <a className="rounded-2xl bg-[#E9F8E0] p-4">
              <div className="overflow-hidden rounded-xl bg-white/30">
                <img
                  src={cat3}
                  alt="Accessories"
                  className="h-56 w-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-base font-extrabold text-slate-900">
                  Accessories
                </h3>
                <p className="mt-1 text-sm text-emerald-700/80">
                  Toys, collars, beds, and more
                </p>
              </div>
            </a>
            <a className="rounded-2xl bg-[#E9F8E0] p-4">
              <div className="overflow-hidden rounded-xl bg-white/30">
                <img
                  src={cat4}
                  alt="Pet Care"
                  className="h-56 w-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-base font-extrabold text-slate-900">
                  Pet Care
                </h3>
                <p className="mt-1 text-sm text-emerald-700/80">
                  Health and wellness products
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Why Adopt from PawMart? */}

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl text-slate-900 sm:text-4xl">
                <span className="font-extrabold">Why Adopt from PawMart?</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] text-emerald-700/80">
                We are more than just a platform; we are a community dedicated
                to finding loving homes for every pet. When you adopt through
                PawMart, you're not just getting a pet; you're saving a life and
                gaining a friend for life.
              </p>
              <div className="mt-10 space-y-7">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Verified Shelters
                    </h3>
                    <p className="mt-1 text-sm text-emerald-700/75">
                      We partner with trusted, reputable shelters and rescue
                      organizations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                    <FaPeopleGroup />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Community Support
                    </h3>
                    <p className="mt-1 text-sm text-emerald-700/75">
                      Join a network of passionate pet lovers for advice and
                      friendship.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                    <PiHandHeartDuotone />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Seamless Process
                    </h3>
                    <p className="mt-1 text-sm text-emerald-700/75">
                      Our streamlined process makes adoption simple and
                      stress-free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:justify-self-end">
              <div className="relative overflow-hidden rounded-[28px] ">
                <img
                  src={dog1}
                  alt="A dog giving a paw"
                  className="h-[460px] w-full object-cover sm:h-[520px] md:h-[560px] md:w-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Heros */}

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Meet Our Pet Heroes
          </h2>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            <div className="rounded-2xl bg-[#DFF5DC] px-7 pb-8 pt-10 text-center">
              <div className="mx-auto mb-5 grid h-[120px] w-[120px]">
                <div className="relative h-[112px] w-[112px]">
                  <img
                    src={hero3}
                    alt="Sarah holding Mittens the cat"
                    className="relative h-full w-full rounded-full object-cover bg-white"
                  />
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Sarah & Mittens
              </h3>
              <p className="mx-auto mt-3 max-w-md text-[15px] italic text-[#2F6B2B]">
                “Adopting Mittens from a local shelter through PawMart was the
                best decision I've ever made. The platform made it so easy to
                find her!”
              </p>
            </div>
            <div className="rounded-2xl bg-[#DFF5DC] px-7 pb-8 pt-10 text-center">
              <div className="mx-auto mb-5 grid h-[120px] w-[120px]">
                <div className="relative h-[112px] w-[112px]">
                  <img
                    src={hero2}
                    alt="The Chen family with Rocky the cat"
                    className="relative h-full w-full rounded-full object-cover bg-white"
                  />
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                The Chen Family & Rocky
              </h3>
              <p className="mx-auto mt-3 max-w-md text-[15px] italic text-[#2F6B2B]">
                “We wanted to add a dog to our family, and PawMart connected us
                with Rocky. He's brought so much joy into our home.”
              </p>
            </div>
            <div className="rounded-2xl bg-[#DFF5DC] px-7 pb-8 pt-10 text-center">
              <div className="mx-auto mb-5 grid h-[120px] w-[120px]">
                <div className="relative h-[112px] w-[112px]">
                  <img
                    src={hero1}
                    alt="Volunteer holding a small cat"
                    className="relative h-full w-full rounded-full object-cover bg-white"
                  />
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Dr. Mark, Volunteer
              </h3>
              <p className="mx-auto mt-3 max-w-md text-[15px] italic text-[#2F6B2B]">
                “As a volunteer, I see firsthand the impact PawMart has. It's an
                incredible tool for connecting deserving pets with loving
                families.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
