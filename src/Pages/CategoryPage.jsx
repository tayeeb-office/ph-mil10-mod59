import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const CategoryPage = () => {
  const [service, setService] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    fetch(
      `https://ph-mil10-mod59-backend.vercel.app/services?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="ml-[20px] md:w-6xl md:mx-auto py-16">
      <title>Category Page</title>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          <h2 className="text-3xl  font-bold pb-8">
            Find Your New Best Friend or a Great Deal
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service?.map((item) => (
            <div
              key={item._id}
              className="w-full rounded-3xl border border-green-200/70 bg-white"
            >
              <div className="p-5">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-72 w-full object-cover"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {item.name}
                  </h3>

                  <div className="mt-2 flex items-center justify-between text-sm font-medium text-green-700/80">
                    <span>{item.category}</span>
                    <span className=" pl-3 text-right">{item.location}</span>
                  </div>

                  <div className="mt-3 text-2xl font-extrabold text-slate-900">
                    ${Number(item.price)}
                  </div>

                  <Link to={`/all/${item?._id}`}>
                    <button
                      type="button"
                      className="mt-5 h-12 w-full rounded-2xl bg-lime-400 font-semibold text-slate-900 hover:bg-lime-300"
                    >
                      See Details
                    </button>
                  </Link>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="font-medium">{item.email}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
