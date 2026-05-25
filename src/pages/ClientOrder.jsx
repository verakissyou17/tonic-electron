import { useOrders } from "../context/useOrders";

function ClientOrder() {
  const { orders } = useOrders();
  return (
    <>
{ orders.lenght > 0 ? (<div>
        {orders.map((order) => {
          return <h1>{order.id}</h1>;
        })}
      </div>) : (<h1>Nu ai nicio comanda.</h1>)}
    </>
  );
}

export default ClientOrder;
