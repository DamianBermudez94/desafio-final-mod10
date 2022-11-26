import css from "./index.module.css";

//componente que muestra un spinner de carga
function Spinner() {
  return (
    <div className={css.wrapper}>
      <div className={css["lds-dual-ring"]}></div>
    </div>
  );
}
function PageLoader() {
  return (
    <div className={css["wrapper-big"]}>
      <div className={css["lds-dual-ring-big"]}></div>
    </div>
  );
}

export { Spinner, PageLoader };