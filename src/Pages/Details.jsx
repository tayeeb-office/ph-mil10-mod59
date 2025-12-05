import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/Provider";
import axios from "axios";

const Details = () => {
  const [service, setService] = useState([]);
  const { myId } = useParams();
  const [loading, setLoading] = useState(true);

  const [myservice, setMyService] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const { user } = useContext(AuthContext);

    const handelSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      name: form.title.value,
      category: form.category.value,
      price: parseInt(form.price.value),
      location: form.location.value,
      description: form.description.value,
      image: form.imageUrl.value,
      date: form.availableFrom.value,
      email: form.contactEmail.value,
    };

    axios
      .put(`http://localhost:3000/update/${selectedItem._id}`, formData)
      .then((res) => {
        console.log(res);
        // Update local state to reflect changes immediately
        setMyService((prev) =>
          prev.map((item) =>
            item._id === selectedItem._id ? { ...item, ...formData } : item
          )
        );
        document.getElementById("update_modal").close();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(`http://localhost:3000/services/${myId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [myId]);

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
                onClick={() => {
                  setSelectedItem(service);
                  document.getElementById("update_modal").showModal();
                }}
                className="mt-10 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-lime-400 font-semibold text-slate-900 hover:bg-lime-300"
              >
                Buy / Adopt Now
              </button>
            </div>
          </div>
        </div>
      </div>

       <dialog id="update_modal" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg mb-6 text-center">
                    Update Listing
                  </h3>

                  {selectedItem && (
                    <form onSubmit={handelSubmit} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block mb-1 font-semibold">
                          Product / Pet Name
                        </label>
                        <input
                          name="title"
                          disabled
                          defaultValue={selectedItem.name}
                          className="input input-bordered w-full"
                          type="text"
                        />
                      </div>

                      {/* Buyer Name */}
                      <div>
                        <label className="block mb-1 font-semibold">
                          Customer Name
                        </label>
                        <input
                          name="CustomerName"
                          className="input input-bordered w-full"
                          type="text"
                        />
                      </div>

                      {/* Price */}
                      <div>
                        <label className="block mb-1 font-semibold">
                          Price
                        </label>
                        <input
                          name="price"
                          disabled
                          defaultValue={selectedItem.price}
                          type="number"
                          className="input input-bordered w-full"
                        />
                      </div>

                      {/* Quantity */}
                      <div>
                        <label className="block mb-1 font-semibold">
                          Quantity
                        </label>
                        <input
                          name="quantity"
                          type="number"
                          className="input input-bordered w-full"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block mb-1 font-semibold">
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          type="number"
                          className="input input-bordered w-full"
                        />
                      </div>

                      {/* Pickup Date */}
                      <div>
                        <label className="block mb-1 font-semibold">
                          Pickup Date
                        </label>
                        <input
                          name="availableFrom"
                          disabled
                          type="date"
                          defaultValue={selectedItem.date}
                          className="input input-bordered w-full"
                        />
                      </div>

                      {/* Address */}
                      <div>
                        <label className="block mb-1 font-semibold">
                          Location
                        </label>
                        <input
                          name="location"
                          defaultValue={selectedItem.location}
                          className="input input-bordered w-full"
                          type="text"
                        />
                      </div>

                      {/* Description */}
                      <div>
                        <label className="block mb-1 font-semibold">
                          Description
                        </label>
                        <textarea
                          name="description"
                          defaultValue={selectedItem.description}
                          className="textarea textarea-bordered w-full"
                        />
                      </div>

                      {/* Image */}
                      <div>
                        <label className="block mb-1 font-semibold">
                          Image URL
                        </label>
                        <input
                          name="imageUrl"
                          defaultValue={selectedItem.image}
                          className="input input-bordered w-full"
                          type="url"
                        />
                      </div>

                      {/* Contact Email */}
                      <div>
                        <label className="block mb-1 font-semibold">
                          Contact Email
                        </label>
                        <input
                          name="contactEmail"
                          defaultValue={selectedItem.email}
                          className="input input-bordered w-full"
                          type="email"
                        />
                      </div>

                      {/* Buttons */}
                      <div className="modal-action flex justify-end gap-4">
                        <button
                          type="button"
                          className="btn"
                          onClick={() =>
                            document.getElementById("update_modal").close()
                          }
                        >
                          Close
                        </button>
                        <button type="submit" className="btn bg-lime-400">
                          Update
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </dialog>
    </div>
  );
};

export default Details;
