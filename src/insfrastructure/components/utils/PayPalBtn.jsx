import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function PayPalBtn() {
  const details = useSelector((state) => state.buyCar.details);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AcRF9QzOOrycRfghrPvdHmQgR4Jq17H7GnboFyWa4Wrge7Sw9IfLU1hML1IZtWGXWMvtS5b6s6EM37a_&currency=USD";
    script.async = true;
    script.onload = () => initPayPalButtons();
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); 
    };
  }, [details]);


  const initPayPalButtons = () => {
    const buyCar = loadPayPalData();

    if (window.paypal) {
      paypal.Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: buyCar
                    .reduce((total, item) => total + (item.unit_amount * item.quantity), 0)
                    .toFixed(2),
                  breakdown: {
                    item_total: {
                      currency_code: "USD",
                      value: buyCar
                        .reduce((total, item) => total + (item.unit_amount * item.quantity), 0)
                        .toFixed(2),
                    },
                  },
                },
                items: buyCar.map((item) => ({
                  name: item.name,
                  unit_amount: { currency_code: "USD", value: (item.unit_amount).toFixed(2) },
                  quantity: item.quantity,
                })),
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            console.log(details);
            alert("Compra completada por " + details.payer.name.given_name);
          });
        },
        onError: function (err) {
          console.error(err);
          alert("Ocurrió un error al procesar el pago.");
        },
      }).render("#paypal-button-container");
    }
  };

  const loadPayPalData = () =>
    details.map((item) => ({
      name: item.service.description,
      unit_amount: item.service.price,
      quantity: item.quantity,
    }));

  return (
    <div id="paypal-button-container"></div>
  );
}

export default PayPalBtn;
