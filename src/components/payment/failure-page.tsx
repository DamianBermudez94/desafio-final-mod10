import Link from "next/link";
import React from "react";

const FailurePage: React.FC = () => {
  return (
    <article>
      <h1>El pago falló</h1>
      <div>
        <p>No pudimos recibir el pago.</p>
        <p>Por favor vuelve a intentarlo.</p>
        <div>
          <Link href="/">
            <button>Ir al inicio</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FailurePage;
