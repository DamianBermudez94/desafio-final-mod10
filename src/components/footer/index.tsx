import React from "react";
import { ShoppingCart } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { PhoneForwarded } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPinCheckInside } from "lucide-react";
export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-between w-full h-auto bg-neutral-100">
      <div className="flex items-center justify-around w-full gap-5 mt-4">
        <div className="">
          <p className="flex gap-2 pt-1">
            <Mail /> shoppinonline@gmail.com
          </p>

          <p className="flex gap-2 pt-2">
            {" "}
            <PhoneForwarded /> +11-4453-455
          </p>
          <p className="flex gap-2 pt-2">
            <MapPinCheckInside />
            Av Indepencia N°1234
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <h4 className="text-2xl font-bold">Nuestras redes</h4>
          <div className="flex justify-center pt-3">
            <a
              href="https://damianbermudezdev.es/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://damianbermudezdev.es/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <hr className="h-[1px] caret-amber-200 m-3" />
      <div className="flex p-5 m-3 gap-9">
        <a href="">
          <ShoppingCart />
        </a>
        <p className="text-xs text-Color-Text">
          &copy; 2025{" "}
          <a
            href="/inicio"
            className="mx-1 text-xl font-bold text-card-border-color"
          >
            ShoppingOnline.com
          </a>{" "}
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
