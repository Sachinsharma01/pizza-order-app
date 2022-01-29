import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [formValid, setFormValid] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const isEmpty = (value) => value.trim() === "";
  const isNotFiveChars = (value) => value.trim().label !== 5;

  const confirmHandler = (event) => {
    event.preventDefault();

    const eneteredName = nameRef.current.value;
    const eneteredStreet = streetRef.current.value;
    const eneteredPostal = postalRef.current.value;
    const eneteredCity = cityRef.current.value;

    const enteredNameIsValid = !isEmpty(eneteredName);
    const enteredStreetIsValid = !isEmpty(eneteredStreet);
    const enteredPostalIsValid = !isEmpty(eneteredPostal);
    const enteredCityIsValid = !isEmpty(eneteredCity);

    setFormValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameRef} type="text" id="name" />
        {!formValid.name && (
          <p style={{ color: "red" }}>Please Enter a valid Name</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input ref={streetRef} type="text" id="street" />
        {!formValid.street && (
          <p style={{ color: "red" }}>Please Enter a valid Name</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalRef} type="text" id="postal" />
        {!formValid.postal && (
          <p style={{ color: "red" }}>Please Enter a valid Name</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input ref={cityRef} type="text" id="city" />
        {!formValid.city && (
          <p style={{ color: "red" }}>Please Enter a valid Name</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
