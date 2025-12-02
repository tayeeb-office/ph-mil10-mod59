import React from "react";
import err from '../assets/Error.png'
import { Link } from "react-router";

const Error = () => {
  return (
    <div>
        <title>404-Error</title>
      <div className=" px-5 py-12 text-slate-900 grid place-items-center">
        <section className="w-full max-w-3xl text-center">
          <img
            src={err}
            alt="Confused puppy with a question mark"
            className="mx-auto mb-5 w-[min(280px,70vw)] select-none"
          />
          <h1 className="mb-4 text-5xl font-extrabold ">
            404 - Page Not Found
          </h1>
          <p className="mx-auto mb-7  text-[18px] text-slate-600">
            Looks like this page went for a walk. Let's get you back on track <br /> to finding your new furry friend.
          </p>
          <div className="flex items-center justify-center gap-5">
            <button
              className="rounded-xl bg-[#35e10b] px-7 py-3.5 text-[16px] font-bold text-[#0b1b0a]"
            >
              <Link to={'/'}>Take me Home</Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Error;
