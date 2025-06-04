import Link from "next/link";

const SuccessPage: React.FC = () => {
  return (
    <article>
      <h1>El pago ha sido exitoso!</h1>
      <div>
        <p>En breve nos comunicaremos por mail para coordinar el envio.</p>
        <span>Muchas gracias por tu compra.</span>
        <div>
          <Link href="/">
            <button>Seguir comprando</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SuccessPage;
