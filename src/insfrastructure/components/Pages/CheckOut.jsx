import { useEffect, useState } from "react";
import { BuyCar } from "../../../domain/models/BuyCar";
import "../../../App.css";
import { HeaderComponent } from "../Header/HeaderComponent";
import { useDispatch, useSelector } from "react-redux";
import { decrementStock, incrementStock } from "../../State/slices/BuyCarSlice";

export function CheckOut() {
  const details = useSelector((state) => state.buyCar.details);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(details);
  }, []);

  return (
    <main>
      <HeaderComponent />
      <div class="h-screen py-8">
        <div class="container mx-auto px-4">
          <h1 class="text-2xl text-white font-semibold mb-4">Shopping Cart</h1>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-3/4">
              <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                <table class="w-full text-black">
                  <thead>
                    <tr>
                      <th class="text-left font-semibold">Product</th>
                      <th class="text-center font-semibold">Price</th>
                      <th class="text-center font-semibold">Quantity</th>
                      <th class="text-center font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-black">
                    {details.map((item, index) => (
                      <tr>
                        <td class="py-4">
                          <div class="flex items-center">
                            <img
                              class="h-16 w-16 mr-4"
                              src="https://via.placeholder.com/150"
                              alt="Product image"
                            />
                            <span class="font-semibold">
                              {item.service.description}
                            </span>
                          </div>
                        </td>
                        <td class=" ">${item.service.price}</td>
                        <td class="py-8 flex items-center justify-center">
                          <div class="flex items-center">
                            <button onClick={() => dispatch(decrementStock(item.id))} class="border rounded-md py-2 px-4 mr-2">
                              -
                            </button>
                            <span class="text-center w-8">{item.quantity}</span>
                            <button onClick={() => dispatch(incrementStock(item.id))} class="border rounded-md py-2 px-4 ml-2">
                              +
                            </button>
                          </div>
                        </td>
                        <td class="py-4">${item.subtotal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div class="md:w-1/4 text-black">
              <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-lg font-semibold mb-4">Summary</h2>
                <div class="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$19.99</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr class="my-2" />
                <div class="flex justify-between mb-2">
                  <span class="font-semibold">Total</span>
                  <span class="font-semibold">$21.98</span>
                </div>
                <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
