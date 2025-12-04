import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {

    const [service, setService] = useState([]);
    const {myId} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect( ()=>{
        fetch(`http://localhost:3000/services/${myId}`)
        .then(res => res.json())
        .then(data => {
            setService(data);
            setLoading(false)
        })
        .catch( err => console.log(err))
    },[myId])

  return (
    <div>
      <title>Details</title>
      <div className="min-h-screen bg-white px-4 py-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Image */}
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={service?.image}
                  alt={service?.name}
                  className="h-[520px] w-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="pt-1">
                {/* Chips */}
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
                    {service?.category}
                  </span>
                </div>

                <h1 className="mt-4 text-4xl font-extrabold text-slate-900">
                  {service?.name}
                </h1>

                {/* Meta */}
                <div className="mt-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Price</span>
                    <span className="text-3xl font-extrabold text-slate-900">
                      ${Number(service?.price)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Owner</span>
                    <span className="font-semibold text-slate-900">
                      {service?.email}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Location</span>
                    <span className="font-semibold text-slate-900">
                      {service?.location}
                    </span>
                  </div>

                  <div className="pt-2">
                    <div className="h-px w-full bg-slate-200" />
                  </div>
                </div>

                {/* About */}
                <div className="mt-6">
                  <h2 className="text-lg font-extrabold text-slate-900">
                    About {service?.name}
                  </h2>
                  <p className="mt-3 max-w-xl text-slate-600">
                    {service?.description}
                  </p>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  className="mt-10 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-lime-400 font-semibold text-slate-900 hover:bg-lime-300"
                >
                  Adopt Now
                </button>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Details;
