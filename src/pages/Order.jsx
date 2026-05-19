import { useCart } from "../context/useCart.js";
import { useState } from "react";
import { FormStyled } from "../styles/Form.styled";
import { DELIVERY_OPTIONS, PAYMENT_OPTIONS } from "../utils/orderOptions.js";

function Order() {
  const { cart, setCart, totalCart } = useCart();
  const [formData, setFormData] = useState({
    delivery: "Ridicare personala",
    payment: "Ramburs la livrare",
    name: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    setError((prevErrors) => ({ ...prevErrors, [name]: "" }));
  }

  function validateForm() {
    let currentErrors = {};

    if (!formData.delivery) {
      currentErrors.delivery = "Alege o metoda de livrare";
    }

    if (!formData.payment) {
      currentErrors.payment = "Alege o metoda de plata";
    }

    if (!formData.name.trim()) currentErrors.name = "Numele este obligatoriu.";
    if (!formData.phone.trim())
      currentErrors.phone = "Telefonul este obligatoriu.";
    if (!formData.address.trim())
      currentErrors.address = "Adresa este obligatorie.";

    setError(currentErrors);

    return Object.keys(currentErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    const order = {
      id: crypto.randomUUID(),
      items: cart,
      total: totalCart,
      delivery: formData.delivery,
      payment: formData.payment,
      customer: {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
      },
      createdAt: new Date().toISOString(),
    };

    console.log(order);
    setCart([]);
    setIsSubmitted(true);
  }

  if (cart.length === 0) {
    return <p>Cosul este gol.</p>;
  }

  if (isSubmitted) {
    return <h1>Comanda a fost inregistrata! Multumim!</h1>;
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <h3>Modalitati de livrare: </h3>
      <fieldset>
        <div className="delivery-container">
          {DELIVERY_OPTIONS.map((option) => (
            <label key={option.id} htmlFor={option.id}>
              <input
                type="radio"
                name="delivery"
                id={option.id}
                value={option.value}
                checked={formData.delivery === option.value}
                onChange={handleOnChange}
              />
              {option.label}
            </label>
          ))}
          {error.delivery && <p className="error">{error.delivery}</p>}
        </div>
      </fieldset>

      <h3>Modalitati de plata: </h3>
      <fieldset>
        <div className="delivery-container">
         {PAYMENT_OPTIONS.map((option) => (
             <label key={option.id} htmlFor={option.id}>
              <input 
                id={option.id} 
                type="radio" 
                name="payment" 
                value={option.value} 
                checked={formData.payment === option.value} 
                onChange={handleOnChange} 
              />
              {option.label}
            </label>
         ))}
          {error.payment && <p className="error">{error.payment}</p>}
        </div>
      </fieldset>

      <h3>Detalii client:</h3>
      <fieldset>
        <div>
          <label htmlFor="name">
            Nume:
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
            />
            {error.name && <p className="error">{error.name}</p>}
          </label>
          <label htmlFor="phone">
            Telefon:
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleOnChange}
            />
            {error.phone && <p className="error">{error.phone}</p>}
          </label>
          <label htmlFor="address">
            Adresa:
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleOnChange}
            />
            {error.address && <p className="error">{error.address}</p>}
          </label>
        </div>
      </fieldset>

      <button className="add-order-btn" type="submit">
        Finalizare comanda
      </button>
    </FormStyled>
  );
}

export default Order;
