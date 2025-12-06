import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/Provider";
import axios from "axios";
import Swal from "sweetalert2";

const AddListing = () => {
  const { user } = useContext(AuthContext);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [price, setPrice] = useState(0);

  const handelSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.title.value;
    const category = form.category.value;
    const price =
      selectedCategory === "Pets" ? 0 : parseFloat(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const image = form.imageUrl.value;
    const date = form.availableFrom.value;
    const email = form.contactEmail.value;

    const formData = {
      user,
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
    };

    axios
      .post("https://ph-mil10-mod59-backend.vercel.app/services", formData)
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Item Added",
            icon: "success",
            draggable: true,
          });
        }

        form.reset();
        setPrice(0);
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

  return (
    <div className=" px-4 py-10 ">
      <title>Add Listing</title>
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Add New Listing
          </h1>
          <p className="mt-3 text-[15px] font-medium ">
            Fill out the details below to add a pet for adoption or a product
            for sale.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-green-200/70 bg-white/60 p-6 shadow-sm md:p-10">
          <form onSubmit={handelSubmit} className="space-y-7">
            {/* Product/Pet Name */}
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-slate-800"
              >
                Product/Pet Name
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="e.g., Golden Retriever Puppy, Durable Chew Toy"
                className="h-12 w-full rounded-2xl border border-green-200 bg-green-50/40 px-4 text-slate-800 placeholder:text-green-700/70 focus:border-green-300"
              />
            </div>

            {/* Row: Category + Price */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Category
                </label>
                <div className="relative">
                  <select
                    id="category"
                    name="category"
                    value={selectedCategory}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSelectedCategory(value);

                      if (value === "Pets") {
                        setPrice(0);
                      }
                    }}
                    className="h-12 w-full rounded-2xl border border-green-200 bg-green-50/40 px-4 pr-10 text-slate-800 focus:border-green-300"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="Pets">Pets</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Food">Food</option>
                    <option value="Care Products">Pet Care Products</option>
                  </select>

                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  ></svg>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Price ($)
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  disabled={selectedCategory === "Pets"}
                  className="h-12 w-full rounded-2xl border border-green-200 bg-green-50/40 px-4 text-slate-800 placeholder:text-green-700/70 focus:border-green-300 disabled:cursor-not-allowed disabled:bg-gray-200"
                />
              </div>
            </div>

            {/* Row: Location + Date */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  required
                  type="text"
                  placeholder="Enter city or address"
                  className="h-12 w-full rounded-2xl border border-green-200 bg-green-50/40 px-4 text-slate-800 placeholder:text-green-700/70 focus:border-green-300"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="availableFrom"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Available for Pick Up
                </label>
                <div className="relative">
                  <input
                    id="availableFrom"
                    name="availableFrom"
                    type="date"
                    className="h-12 w-full rounded-2xl border border-green-200 bg-green-50/40 px-4 pr-12 text-slate-800 focus:border-green-300"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-slate-800"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                placeholder="Tell us more about the pet or product..."
                className="w-full  rounded-2xl border border-green-200 bg-green-50/40 px-4 py-3 text-slate-800 placeholder:text-green-700/70 focus:border-green-300 "
              />
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label
                htmlFor="imageUrl"
                className="block text-sm font-semibold text-slate-800"
              >
                Image URL
              </label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="h-12 w-full rounded-2xl border border-green-200 bg-green-50/40 px-4 text-slate-800 placeholder:text-green-700/70 focus:border-green-300"
              />
            </div>

            {/* Contact Email */}
            <div className="space-y-2">
              <label
                htmlFor="contactEmail"
                className="block text-sm font-semibold text-slate-800"
              >
                Contact Email
              </label>
              <input
                defaultValue={user?.email || ""}
                id="contactEmail"
                name="contactEmail"
                type="email"
                placeholder="current.user@email.com"
                className="h-12 w-full rounded-2xl border border-green-200 bg-green-50/40 px-4 text-slate-800 placeholder:text-green-700/70 focus:border-green-300"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-end gap-4 pt-5 sm:flex-row sm:justify-end">
              <button
                type="submit"
                name="createListing"
                className="h-12 w-full rounded-2xl bg-green-500 px-8 font-semibold text-slate-900 hover:bg-green-400 focus:ring-green-200 sm:w-auto"
              >
                Create Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
