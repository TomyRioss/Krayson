import React from "react";

function PayPalBtn({productId}) {
  return (
    <form
      action={`https://www.paypal.com/ncp/payment/${productId}`}
      method="post"
      target="_top"
      style={{
        display: "inline-grid",
        justifyItems: "center",
        alignContent: "start",
        gap: "0.5rem",
      }}

    >
      <input
        className="pp-YTS5Q3KPK5YK4"
        type="submit"
        value="Buy Now!"
        style={{ cursor: "pointer" }}
      />
    </form>
  );
}

export default PayPalBtn;
