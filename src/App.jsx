import { useState } from "react";
import logoEnvio from "./assets/logo.png";
import dimensiones from "./assets/dimensiones.png";

import "./App.css";

function App() {
  const [zipOrigin, setZipOrigin] = useState("");
  const [zipEnd, setZipEnd] = useState("");
  const [numberOfPackages, setNumberOfPackages] = useState(1);
  const [numberOfKg, setNumberOfKg] = useState("");
  const [numberOfHight, setNumberOfHight] = useState("");
  const [numberOfWeight, setNumberOfWeight] = useState("");
  const [numberOfLength, setNumberOfLength] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleNumberOfPackages = (event) => {
    setNumberOfPackages(parseInt(event.target.value));
    validateForm();
  };

  const handleNumberOfKg = (e) => {
    const { value } = e.target;
    // Validar que el valor ingresado sea un número válido con decimales
    if (/^\d*\.?\d*$/.test(value) || value === "") {
      setNumberOfKg(value);
      validateForm();
    }
  };

  const handleNumberOfHight = (event) => {
    setNumberOfHight(event.target.value);
    validateForm();
  };

  const handleNumberOfWeight = (event) => {
    setNumberOfWeight(event.target.value);
    validateForm();
  };

  const handleNumberOfLength = (event) => {
    setNumberOfLength(event.target.value);
    validateForm();
  };

  const handleZipOrigin = (e) => {
    setZipOrigin(e.target.value);
    validateForm();
  };

  const handleZipEnd = (e) => {
    setZipEnd(e.target.value);
    validateForm();
  };

  const validateForm = () => {
    // Verificar que todos los campos requeridos estén llenos
    const formIsValid =
      zipOrigin.trim() !== "" &&
      zipEnd.trim() !== "" &&
      numberOfPackages > 0 &&
      numberOfKg.trim() !== "" &&
      numberOfHight.trim() !== "" &&
      numberOfWeight.trim() !== "" &&
      numberOfLength.trim() !== "";

    setFormValid(formIsValid);
  };

  const mandarInfo = () => {
    if (formValid) {
      const telefono = "3323738000";
      const mensaje = `Hola, me gustaría cotizar un envío de ${numberOfPackages} paquete, el peso de mi paquete es de ${numberOfKg} kg. El largo es: ${numberOfLength} cm. El ancho es: ${numberOfWeight} cm. El alto es: ${numberOfHight} cm. El envío será del Código Postal ${zipOrigin} al ${zipEnd}.`;

      const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
    } else {
      // Agregamos la clase 'is-invalid' a los campos vacíos
      const originInput = document.getElementById("origin");
      const endInput = document.getElementById("end");
      const packagesInput = document.getElementById("packages");
      const kgInput = document.getElementById("kg");
      const hightInput = document.getElementById("hight");
      const weightInput = document.getElementById("weight");
      const lenghtInput = document.getElementById("lenght");

      if (zipOrigin.trim() === "") originInput.classList.add("is-invalid");
      else originInput.classList.remove("is-invalid");

      if (zipEnd.trim() === "") endInput.classList.add("is-invalid");
      else endInput.classList.remove("is-invalid");

      if (numberOfPackages === 0) packagesInput.classList.add("is-invalid");
      else packagesInput.classList.remove("is-invalid");

      if (numberOfKg.trim() === "") kgInput.classList.add("is-invalid");
      else kgInput.classList.remove("is-invalid");

      if (numberOfHight.trim() === "") hightInput.classList.add("is-invalid");
      else hightInput.classList.remove("is-invalid");

      if (numberOfWeight.trim() === "") weightInput.classList.add("is-invalid");
      else weightInput.classList.remove("is-invalid");

      if (numberOfLength.trim() === "") lenghtInput.classList.add("is-invalid");
      else lenghtInput.classList.remove("is-invalid");
    }
  };

  return (
    <div className="App">
      <div>
        <a href="https://www.instagram.com/dimebruce" target="_blank">
          <img src={logoEnvio} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-white mb-3">˗ˏˋ Vecino Envíoˎˊ 📦</h1>
      <h5 className="text-white">Cotizador</h5>
      <div className="card p-4">
        <form className="m-4">
          {/* 2 column grid layout with text inputs for the first and last names */}
          <div className="row mb-4">
            <h5>Código Postal</h5>
            <div className="col">
              <div className="form-outline">
                <input
                  type="number"
                  value={zipOrigin}
                  onChange={handleZipOrigin}
                  min="1"
                  id="origin"
                  placeholder="58090"
                  className={`form-control ${zipOrigin.trim() === "" && formValid ? "is-invalid" : ""}`}
                />
                <label className={`form-label ${zipOrigin.trim() === "" && formValid ? "text-danger" : ""}`} htmlFor="origin">
                  Origen
                </label>
                {zipOrigin.trim() === "" && formValid && <div className="invalid-feedback">Este campo es requerido</div>}
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text" // Cambiado de "number" a "text"
                  value={zipEnd}
                  onChange={handleZipEnd}
                  placeholder="91000"
                  id="end"
                  className={`form-control ${zipEnd.trim() === "" && formValid ? "is-invalid" : ""}`}
                />
                <label className={`form-label ${zipEnd.trim() === "" && formValid ? "text-danger" : ""}`} htmlFor="end">
                  Destino
                </label>
                {zipEnd.trim() === "" && formValid && <div className="invalid-feedback">Este campo es requerido</div>}
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="number"
                  value={numberOfPackages}
                  onChange={handleNumberOfPackages}
                  min="1"
                  max="6"
                  id="packages"
                  className={`form-control ${numberOfPackages === 0 && formValid ? "is-invalid" : ""}`}
                />
                <label className={`form-label ${numberOfPackages === 0 && formValid ? "text-danger" : ""}`} htmlFor="packages">
                  Paquetes (1-6)
                </label>
                {numberOfPackages === 0 && formValid && <div className="invalid-feedback">Este campo es requerido</div>}
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text" // Cambiado de "number" a "text"
                  value={numberOfKg}
                  onChange={handleNumberOfKg}
                  id="kg"
                  placeholder="1"
                  className={`form-control ${numberOfKg.trim() === "" && formValid ? "is-invalid" : ""}`}
                  pattern="^\d*\.?\d*$" // Expresión regular para validar el valor
                />
                <label className={`form-label ${numberOfKg.trim() === "" && formValid ? "text-danger" : ""}`} htmlFor="kg">
                  kg
                </label>
                {numberOfKg.trim() === "" && formValid && <div className="invalid-feedback">Este campo es requerido</div>}
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <h6 className="text-danger">*Todos los valores son en cm</h6>
            <div className="col">
              <div className="form-outline">
                <input
                  type="number"
                  value={numberOfHight}
                  placeholder="30"
                  min="1"
                  id="hight"
                  onChange={handleNumberOfHight}
                  className={`form-control ${numberOfHight.trim() === "" && formValid ? "is-invalid" : ""}`}
                />
                <label className={`form-label ${numberOfHight.trim() === "" && formValid ? "text-danger" : ""}`} htmlFor="hight">
                  Alto
                </label>
                {numberOfHight.trim() === "" && formValid && <div className="invalid-feedback">Este campo es requerido</div>}
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="number"
                  value={numberOfWeight}
                  min="1"
                  id="weight"
                  placeholder="20"
                  onChange={handleNumberOfWeight}
                  className={`form-control ${numberOfWeight.trim() === "" && formValid ? "is-invalid" : ""}`}
                />
                <label className={`form-label ${numberOfWeight.trim() === "" && formValid ? "text-danger" : ""}`} htmlFor="weight">
                  Ancho
                </label>
                {numberOfWeight.trim() === "" && formValid && <div className="invalid-feedback">Este campo es requerido</div>}
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="number"
                  value={numberOfLength}
                  min="1"
                  placeholder="15"
                  onChange={handleNumberOfLength}
                  id="lenght"
                  className={`form-control ${numberOfLength.trim() === "" && formValid ? "is-invalid" : ""}`}
                />
                <label className={`form-label ${numberOfLength.trim() === "" && formValid ? "text-danger" : ""}`} htmlFor="lenght">
                  Largo
                </label>
                {numberOfLength.trim() === "" && formValid && <div className="invalid-feedback">Este campo es requerido</div>}
              </div>
            </div>
          </div>
          <div>
            <a href="https://www.instagram.com/dimebruce" target="_blank">
              <img
                src={dimensiones}
                className="mb-5"
                alt="React logo"
                style={{ maxWidth: "80%" }}
              />
            </a>
          </div>
        </form>
        {/* Submit button */}
        <button
          onClick={mandarInfo}
          type="button" // Cambiado a type="button" para evitar que se envíe el formulario automáticamente
          className="btn btn-primary mb-4 w-100"
        >
          Enviar a cotizar 📦
        </button>
      </div>
    </div>
  );
  
}

export default App;
