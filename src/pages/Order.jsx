import React from "react";

function Order() {
  //   const order = {
  //   id: crypto.randomUUID(),
  //   items: cart,
  //   total: totalCart,
  //   shippingMethod,
  //   paymentMethod,
  //   customer: {
  //     name,
  //     phone,
  //     address,
  //   },
  //   createdAt: new Date().toISOString(),
  // };
  return (
    <form>
      <fieldset>
        <h3>Modalitati de livrare: </h3>
        <div className="delivery-container">
          <label htmlFor="personal">
            <input id="personal" type="radio" name="delivery" />
            Ridicare personala
          </label>
          <label htmlFor="standard">
            <input id="standard" type="radio" name="delivery" />
            Curier
          </label>
          <label htmlFor="rapid">
            <input id="rapid" type="radio" name="delivery" />
            Livare rapida
          </label>
        </div>
      </fieldset>

      <fieldset>
        <h3>Modalitati de plata: </h3>
        <div className="delivery-container">
          <label htmlFor="ramburs">
            <input id="ramburs" type="radio" name="payment" />
            Ramburs la livrare
          </label>
          <label htmlFor="transfer">
            <input type="radio" name="payment" />
            Transfer bancar
          </label>
          <label htmlFor="card">
            <input id="card" type="radio" name="payment" />
            Card bancar online
          </label>
        </div>
      </fieldset>

      <fieldset>
        <h3>Detalii client:</h3>
        <label htmlFor="name">
          Nume:
          <input id="name" type="text" name="name" />
        </label>
        <label htmlFor="phone">
          Telefon:
          <input id="phone" type="phone" name="phone" />
        </label>
        <label htmlFor="address">
          Adresa:
          <input id="address" type="text" name="address" />
        </label>
      </fieldset>

      <button className="add-order" type="submit">
        Finalizare comanda
      </button>
    </form>
  );
}

export default Order;
