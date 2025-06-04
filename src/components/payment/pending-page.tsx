import Link from "next/link";
import React from "react";

const PendingPage: React.FC = () => {
  return (
    <article>
      <h1>pago esta pendiente</h1>
      <div>
        <p>
          En cuanto recibamos la confirmacion de pago, nos comunicaremos por
          mail para coordinar el envío.
        </p>
        <span> gacias por tu compra.</span>
        <div>
          <Link href="/">
            <button>Seguir comprando</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PendingPage;
