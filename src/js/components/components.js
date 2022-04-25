import "../../css/components.css";
import webpackLogo from "../../assets/imgs/webpack-logo.png";

const saludar = (nombre) => {
  console.log("Creando etiqueta h1");

  const h1 = document.createElement("h1");
  h1.innerText = `El nombre es ${nombre}!!!`;
  document.body.append(h1);
  const img = document.createElement("img");
  img.src = webpackLogo;
  img.classList = "img-webpack";
  document.body.append(img);
};

export default saludar;
