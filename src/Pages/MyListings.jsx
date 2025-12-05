import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Provider";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const MyListings = () => {
  const [myservice, setMyService] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://ph-mil10-mod59-backend.vercel.app/my-services?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyService(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  const handelDelete = (id) => {
    axios
      .delete(`https://ph-mil10-mod59-backend.vercel.app/delete/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.deletedCount == 1) {
          const filterData = myservice.filter((service) => service._id != id);
          setMyService(filterData);
          Swal.fire({
            title: "Item Deleted",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => console.error(err));
  };

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
      .put(
        `https://ph-mil10-mod59-backend.vercel.app/update/${selectedItem._id}`,
        formData
      )
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

  return (
    <div className="min-h-screen bg-[#f7fbf3] px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-5xl font-extrabold">My Listings</h1>

          <Link
            to="/addlisting"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-lime-400 px-6 font-semibold hover:bg-lime-300"
          >
            Create New Listing
          </Link>
        </div>

        {/* Table */}
        <div className="mt-10 rounded-3xl bg-white">
          <div className="hidden md:grid grid-cols-5 text-center px-8 py-5 font-extrabold bg-white border-t">
            <div>Image</div>
            <div>Title</div>
            <div>Category</div>
            <div>Date</div>
            <div className="text-right">Actions</div>
          </div>

          {myservice.map((item) => (
            <div
              key={item._id}
              className="grid md:grid-cols-5 text-center gap-4 px-8 py-6 border-t"
            >
              <img src={item.image} className="h-14 w-14 rounded-xl" />

              <div className="font-semibold">{item.name}</div>
              <div>{item.category}</div>
              <div>{item.date}</div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    setSelectedItem(item);
                    document.getElementById("update_modal").showModal();
                  }}
                  className="font-semibold text-slate-700"
                >
                  Update
                </button>

                <button
                  onClick={() => handelDelete(item._id)}
                  className="font-semibold text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {myservice.length === 0 && (
            <div className="text-center py-10 text-slate-600">
              No listings found.
            </div>
          )}
        </div>
      </div>

      <dialog id="update_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-6 text-center">Update Listing</h3>

          {selectedItem && (
            <form onSubmit={handelSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block mb-1 font-semibold">
                  Product / Pet Name
                </label>
                <input
                  name="title"
                  defaultValue={selectedItem.name}
                  className="input input-bordered w-full"
                  type="text"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block mb-1 font-semibold">Category</label>
                <select
                  name="category"
                  className="h-12 w-full border p-2"
                  defaultValue={selectedItem.category}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Pets">Pets</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Food">Food</option>
                  <option value="Care Products">Pet Care Products</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block mb-1 font-semibold">Price</label>
                <input
                  name="price"
                  defaultValue={selectedItem.price}
                  type="number"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Pickup Date */}
              <div>
                <label className="block mb-1 font-semibold">Pickup Date</label>
                <input
                  name="availableFrom"
                  type="date"
                  defaultValue={selectedItem.date}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block mb-1 font-semibold">Location</label>
                <input
                  name="location"
                  defaultValue={selectedItem.location}
                  className="input input-bordered w-full"
                  type="text"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block mb-1 font-semibold">Description</label>
                <textarea
                  name="description"
                  defaultValue={selectedItem.description}
                  className="textarea textarea-bordered w-full"
                />
              </div>

              {/* Image */}
              <div>
                <label className="block mb-1 font-semibold">Image URL</label>
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

export default MyListings;
