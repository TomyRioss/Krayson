import { useEffect, useState } from "react";
import "../../../App.css";
import { HeaderComponent } from "../Header/HeaderComponent";
import { useDispatch, useSelector } from "react-redux";
import { decrementStock, getTotal, incrementStock } from "../../State/slices/BuyCarSlice";
import PayPalBtn from "../utils/PayPalBtn";

export function CheckOut() {
  const details = useSelector((state) => state.buyCar.details);
  const total = useSelector((state) => state.buyCar.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal())
  }, []);

  return (
    <main>
      <HeaderComponent />
      <div className="h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-white font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full text-black">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-center font-semibold">Price</th>
                      <th className="text-center font-semibold">Quantity</th>
                      <th className="text-center font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody classNameName="text-black">
                    {details.map((item, index) => (
                      <tr>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src="https://via.placeholder.com/150"
                              alt="Product image"
                            />
                            <span className="font-semibold">
                              {item.service.description}
                            </span>
                          </div>
                        </td>
                        <td className=" ">${item.service.price}</td>
                        <td className="py-8 flex items-center justify-center">
                          <div className="flex items-center">
                            <button onClick={() => {
                              dispatch(decrementStock(item.id))
                              dispatch(getTotal())
                            }} className="border rounded-md py-2 px-4 mr-2">
                              -
                            </button>
                            <span className="text-center w-8">{item.quantity}</span>
                            <button onClick={() => {
                              dispatch(incrementStock(item.id))
                              dispatch(getTotal())  
                            }} className="border rounded-md py-2 px-4 ml-2">
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4">${item.subtotal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/4 text-black">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Resumen</h2>
                
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${total}</span>
                </div>
                <PayPalBtn/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
