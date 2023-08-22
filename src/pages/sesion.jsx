import $, { each, valHooks } from "jquery";
//import Accesibilidad from '../components/Accesibilidad'
import React, { useState, useEffect } from "react";
import "../assets/css/form.css";

const isesion = () => {
  const email = $("#usr").val();
  const password = $("#psw").val();
  
  if (email == ("")) {
      alert("Ingresar Usuario");
  }
  if (password == ("")) {
      alert("Ingresar Contraseña");
  }
  else {
      var url = "https://render-simr.onrender.com/consulta/" + email + "/" + password;
      $.getJSON(url, function (data) {
          $.each(data, function (key, val) {
            if (val.nombre == "INEXISTENTE") {
              alert("El nombre de usuario o la contraseña son incorrectos");
          }else{
            localStorage.setItem('credenciales', JSON.stringify(val));
            window.location.href = "/web/#/principal"
          }
          });
      });
  }
}

function Sesion(props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (newPassword.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres.');
    } else {
      setPasswordError('');
    }
  };

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper"),
          signupHeader = document.querySelector(".signup header"),
          loginHeader = document.querySelector(".login header");
        loginHeader.addEventListener("click", () => {
          wrapper.classList.add("active");
        });
        signupHeader.addEventListener("click", () => {
          wrapper.classList.remove("active");
        });
}, []);
  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setPasswordError('Las contraseñas no coinciden.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza el envío del formulario si todos los campos son válidos
    if (password.length >= 8 && password === confirmPassword) {
      // Realiza la acción necesaria (por ejemplo, enviar datos al servidor)
    }
  };

  return (
    <div className="Inicio">
      <section className="wrapper">
        <div className="form signup">
          <header>Registrarse</header>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre Completo" required />
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} required />
            <input type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
            {passwordError && <div className="error-message">{passwordError}</div>}
            <div className="checkbox">
              <input type="checkbox" id="signupCheck" />
              <label htmlFor="signupCheck">Acepto los Términos y Condiciones</label>
            </div>
            <input type="submit" value="Registrarse" />
          </form>
        </div>
        <div className="form login">
          <header>Iniciar Sesión</header>
          <form action="#">
            <input type="text" id="usr" placeholder="Email" required />
            <input type="password" id="psw" placeholder="Contraseña" required />
            <a href="#">Olvidaste tu contraseña?</a>
            <input type="submit" value="Iniciar Sesión" onClick={isesion} />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Sesion;