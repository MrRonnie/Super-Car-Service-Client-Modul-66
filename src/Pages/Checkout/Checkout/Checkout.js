import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Checkout Order: {service.name}</h2>
      <form>
        <input
          className="w-100 mb-3"
          type="text"
          value={user.displayName}
          name="name"
          placeholder="name"
          required
          readOnly
        />{" "}
        <br />
        <input
          className="w-100 mb-3"
          type="email"
          value={user.email}
          name="email"
          placeholder="email"
          required
          readOnly
          disabled
        />{" "}
        <br />
        <input
          className="w-100 mb-3"
          type="text"
          value={service.name}
          name="service"
          placeholder="service"
          required
        />{" "}
        <br />
        <input
          className="w-100 mb-3"
          type="text"
          name="address"
          placeholder="address"
          required
          autoComplete="off"
        />{" "}
        <br />
        <input
          className="w-100 mb-3"
          type="text"
          name="phone"
          placeholder="phone"
          required
        />{" "}
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order " />
      </form>
    </div>
  );
};

export default Checkout;
