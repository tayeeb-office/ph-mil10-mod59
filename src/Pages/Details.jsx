import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/Provider";
import axios from "axios";
import Swal from "sweetalert2";

const Details = () => {
  const [service, setService] = useState([]);
  const { myId } = useParams();
  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);

  const [selectedItem, setSelectedItem] = useState(null);
  const { user } = useContext(AuthContext);

  const handelSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      productId: selectedItem?._id,
      name: selectedItem?.name,
      price: parseInt(selectedItem?.price),
      quantity: selectedItem?.category === "Pets" ? 1 : parseInt(quantity),
      pickupDate: form.availableFrom.value,
      phone: form.phone.value,
      location: form.location.value,
      note: form.description.value,
      buyerName: user.displayName,
      buyerEmail: user.email,
    };

    axios
      .post("https://ph-mil10-mod59-backend.vercel.app/orders", formData)
      .then((res) => {
        console.log(res);

        if (res.data.acknowledged) {
          Swal.fire({
            title: "Item Purchased / Adopted",
            icon: "success",
            draggable: true,
          });
        }
        document.getElementById("update_modal").close();
        form.reset();
        setQuantity(1);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        console.error(err);
      });
  };

  useEffect(() => {
    fetch(`https://ph-mil10-mod59-backend.vercel.app/services/${myId}`)
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

                  if (service.category === "Pets") {
                    setQuantity(1);
                  } else {
                    setQuantity("");
                  }

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
          <h3 className="font-bold text-lg mb-6 text-center">Update Listing</h3>

          {selectedItem && (
            <form onSubmit={handelSubmit} className="space-y-4">
              {/* Buyer Name */}
              <div>
                <label className="block mb-1 font-semibold">
                  Customer Name
                </label>
                <input
                  name="CustomerName"
                  defaultValue={user.displayName}
                  disabled
                  className="input input-bordered w-full"
                  type="text"
                />
              </div>

              {/* Contact Email */}
              <div>
                <label className="block mb-1 font-semibold">
                  Contact Email
                </label>
                <input
                  name="contactEmail"
                  disabled
                  defaultValue={user.email}
                  className="input input-bordered w-full"
                  type="email"
                />
              </div>

              {/* ID */}
              <div>
                <label className="block mb-1 font-semibold">Product ID</label>
                <input
                  name="title"
                  disabled
                  defaultValue={selectedItem._id}
                  className="input input-bordered w-full"
                  type="text"
                />
              </div>

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

              {/* Price */}
              <div>
                <label className="block mb-1 font-semibold">Price</label>
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
                <label className="block mb-1 font-semibold">Quantity</label>
                <input
                  name="quantity"
                  type="number"
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  disabled={selectedItem?.category === "Pets"}
                  className="input input-bordered w-full disabled:bg-gray-200 disabled:cursor-not-allowed"
                />
              </div>

              {/* Pickup Date */}
              <div>
                <label className="block mb-1 font-semibold">Pickup Date</label>
                <input
                  name="availableFrom"
                  required
                  type="date"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1 font-semibold">Phone Number</label>
                <input
                  name="phone"
                  required
                  type="number"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block mb-1 font-semibold">Address</label>
                <input
                  name="location"
                  required
                  className="input input-bordered w-full"
                  type="text"
                />
              </div>

              {/* Note */}
              <div>
                <label className="block mb-1 font-semibold">
                  Additional Note
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-full"
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
                  Purchase / Adopt
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
