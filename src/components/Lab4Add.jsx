import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";

function Lab4Add() {
  const [errors, setErrors] = useState([]);
  const [isSending, setSending] = useState(false);
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const navigate = useNavigate();

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    console.log("Submitting...");

    const data = new FormData(e.target);
    const newErrors = [];

    const name = data.get("name");
    const email = data.get("email");
    const url = data.get("url");
    const photo = data.get("photo");

    if (!name || name.length < 2 || name.length > 50) {
      newErrors.push("Imię i nazwisko musi mieć od 2 do 50 znaków!");
    }

    if (!email || email.length < 5 || email.length > 100) {
      newErrors.push("Email musi mieć od 5 do 100 znaków!");
    }

    if (!url || url.length < 5 || url.length > 200) {
      newErrors.push("URL musi mieć od 5 do 200 znaków!");
    }

    if (!photo || photo.length < 5 || photo.length > 200) {
      newErrors.push("URL zdjęcia musi mieć od 5 do 200 znaków!");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch({
      type: "add",
      name: name.trim(),
      email: email.trim(),
      url: url.trim(),
      photo: photo.trim(),
    });

    setSending(false);
    navigate("/lab3");
  };

  return (
    <div className="container mt-4">
      <h1>Dodaj nową osobę</h1>

      <div className="text-danger">
        {errors.map((error, i) => (
          <p key={i}>{error}</p>
        ))}
      </div>

      <form className="text-primary" onSubmit={onSubmitFunction}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Imię i nazwisko
          </label>
          <input
            required
            id="name"
            type="text"
            name="name"
            className="form-control"
            placeholder="Wprowadź imię i nazwisko"
            minLength={2}
            maxLength={50}
          />
          <div className="form-text text-muted">Wprowadź od 2 do 50 znaków</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            required
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="Wprowadź adres email"
            minLength={5}
            maxLength={100}
          />
          <div className="form-text text-muted">
            Wprowadź prawidłowy adres email (5-100 znaków)
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            Strona WWW
          </label>
          <input
            required
            id="url"
            type="url"
            name="url"
            className="form-control"
            placeholder="https://example.com"
            minLength={5}
            maxLength={200}
          />
          <div className="form-text text-muted">
            Wprowadź URL strony internetowej (5-200 znaków)
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            URL zdjęcia
          </label>
          <input
            required
            id="photo"
            type="url"
            name="photo"
            className="form-control"
            placeholder="https://example.com/photo.jpg"
            minLength={5}
            maxLength={200}
          />
          <div className="form-text text-muted">
            Wprowadź URL zdjęcia (5-200 znaków)
          </div>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            disabled={isSending}
            type="submit"
            className="btn btn-primary btn-lg me-md-2"
          >
            {isSending ? "Dodawanie..." : "Dodaj osobę"}
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={() => navigate("/lab3")}
          >
            Anuluj
          </button>
        </div>
      </form>
    </div>
  );
}

export default Lab4Add;
