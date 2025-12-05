import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { AuthContext } from "../Provider/Provider";

const MyOrders = () => {
  const [myorders, setMyorders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(
        `https://ph-mil10-mod59-backend.vercel.app/orders?email=${user.email}`
      )
      .then((res) => {
        setMyorders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.text("My Orders Report", 14, 15);

    const tableColumn = [
      "Product Name",
      "Buyer Name",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone",
    ];

    const tableRows = myorders.map((item) => [
      item.name,
      item.buyerName,
      item.price,
      item.quantity,
      item.location,
      item.pickupDate,
      item.phone,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: { fontSize: 9 },
    });

    doc.save("My_Orders_Report.pdf");
  };

  return (
    <div className="min-h-screen  px-4 py-10 ">
      <div className="mx-auto max-w-6xl">
    
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-5xl font-extrabold">My Orders</h1>

          <button
            onClick={handleDownloadPDF}
            className="inline-flex h-12 items-center text-black justify-center rounded-2xl bg-lime-400 px-6 font-semibold hover:bg-lime-300"
          >
            Download Report
          </button>
        </div>

 
        <div className="mt-10 rounded-3xl bg-white">
          <div className="hidden md:grid grid-cols-7 text-center px-8 py-5 font-extrabold text-black bg-white border-t">
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
              className="grid md:grid-cols-7 text-black text-center gap-4 px-8 py-6 border-t"
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
