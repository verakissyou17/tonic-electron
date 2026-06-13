import { useState } from "react";
import { useCart } from "../../hooks/useCart.js";
import { useOrders } from "../../hooks/useOrders.js";
import OrderSuccess from "../orders/OrderSuccess.jsx";
import { FormDataStyled } from "../../styles/checkout/FormData.styled.jsx";
import { DELIVERY_OPTIONS, PAYMENT_OPTIONS } from "../../utils/orderOptions.js";

function FormData() {
  const [formData, setFormData] = useState({
    delivery: "Ridicare personala",
    payment: "Ramburs la livrare",
    name: "",
    surname: "",
    phone: "",
    street: "",
    number: "",
    city: "",
    zipCode: "",

    email: "",
  });

  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { cart, setCart, totalCart } = useCart();
  const { orders, addOrder } = useOrders();

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

    if (!formData.name.trim())
      currentErrors.name = "Prenumele este obligatoriu.";
    if (!formData.surname.trim())
      currentErrors.surname = "Numele este obligatoriu.";
    if (!formData.phone.trim())
      currentErrors.phone = "Telefonul este obligatoriu.";
    if (!formData.email.trim()) currentErrors.email = "Email invalid.";
    if (!formData.street.trim())
      currentErrors.street = "Strada este obligatorie.";
    if (!formData.number.trim()) currentErrors.number = "Nr. este obligatoriu.";
    if (!formData.city.trim()) currentErrors.city = "Orasul este obligatoriu.";
    if (!formData.zipCode.trim()) currentErrors.zipCode = "Obligatoriu.";

    setError(currentErrors);

    return Object.keys(currentErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    const nextOrderNumber =
      orders.length > 0 ? parseInt(orders[0].id.replace("#", "")) + 1 : 1001;

    const order = {
      id: `${nextOrderNumber}`,
      items: cart,
      total: totalCart,
      delivery: formData.delivery,
      payment: formData.payment,
      customer: {
        fullName: {
          name: formData.name,
          surname: formData.surname,
        },
        phone: formData.phone,
        address: {
          street: formData.street,
          number: formData.number,
          city: formData.city,
          zipCode: formData.zipCode,
        },
        email: formData.email,
      },
      createdAt: new Date().toISOString(),
    };

    addOrder(order);
    setCart([]);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return <OrderSuccess />;
  }

  return (
    <FormDataStyled onSubmit={handleSubmit}>
      <div className="payment-delivery">
        <div className="radio-group">
          <h3>Modalitati de livrare: </h3>
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
        </div>
        <div className="radio-group">
          <h3>Modalitati de plata: </h3>
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
        </div>
      </div>
      <div className="client-details">
        <h3>Detalii client:</h3>
        <div className="client-data">
          <div className="row">
            <label htmlFor="surname">
              Nume
              <input
                id="surname"
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleOnChange}
              />
              {error.surname && <p className="error">{error.surname}</p>}
            </label>
            <label htmlFor="name">
              Prenume
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleOnChange}
              />
              {error.name && <p className="error">{error.name}</p>}
            </label>
          </div>
          <div className="row">
            <label htmlFor="phone">
              Telefon
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleOnChange}
              />
              {error.phone && <p className="error">{error.phone}</p>}
            </label>
            <label htmlFor="email">
              Email
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
              />
              {error.email && <p className="error">{error.email}</p>}
            </label>
          </div>
        </div>
        <h4>Adresa:</h4>
        <div className="address">
          <div className="row">
            <label htmlFor="street">
              Strada
              <input
                id="street"
                type="text"
                name="street"
                value={formData.street}
                onChange={handleOnChange}
              />
              {error.street && <p className="error">{error.street}</p>}
            </label>
            <label htmlFor="number">
              Nr.
              <input
                id="number"
                type="text"
                name="number"
                value={formData.number}
                onChange={handleOnChange}
              />
              {error.number && <p className="error">{error.number}</p>}
            </label>
          </div>
          <div className="row">
            <label htmlFor="city">
              Oras
              <input
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleOnChange}
              />
              {error.city && <p className="error">{error.city}</p>}
            </label>
            <label htmlFor="zipCode">
              Cod postal
              <input
                id="zipCode"
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleOnChange}
              />
              {error.zipCode && <p className="error">{error.zipCode}</p>}
            </label>
          </div>
        </div>
      </div>
      <button className="add-order-btn" type="submit">
        Finalizare comanda
      </button>
    </FormDataStyled>
  );
}

export default FormData;
