import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const MyOrders = () => {
  const [myorders, setMyorders] = useState([]);

  useEffect(() => {
    axios
      .get("https://ph-mil10-mod59-backend.vercel.app/orders")
      .then((res) => {
        setMyorders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(myorders);

  return (
    <div className="min-h-screen bg-[#f7fbf3] px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-5xl font-extrabold">My Orders</h1>

          <Link
            to="/addlisting"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-lime-400 px-6 font-semibold hover:bg-lime-300"
          >
            Download Report
          </Link>
        </div>

        {/* Table */}
        <div className="mt-10 rounded-3xl bg-white">
          <div className="hidden md:grid grid-cols-7 text-center px-8 py-5 font-extrabold bg-white border-t">
            <div>Product/Listing Name</div>
            <div>Buyer Name</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Address</div>
            <div>Date</div>
            <div>Phone</div>
          </div>

          {myorders.map((item) => (
            <div
              key={item._id}
              className="grid md:grid-cols-7 text-center gap-4 px-8 py-6 border-t"
            >
              <div className="font-semibold">{item.name}</div>
              <div>{item.buyerName}</div>
              <div>{item.price}</div>
              <div>{item.quantity}</div>
              <div>{item.location}</div>
              <div>{item.pickupDate}</div>
              <div>{item.phone}</div>
            </div>
          ))}
          {myorders.length === 0 && (
            <div className="text-center py-10 text-slate-600">
              No orders found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
