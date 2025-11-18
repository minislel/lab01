import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import AppContext from "../data/AppContext";

function Lab4Edit() {
  const context = useContext(AppContext);
  const items = context.items;
  const dispatch = context.dispatch;

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id"));

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    const person = items.find((item) => item.id === id);
    if (person) {
      setValue("name", person.name);
      setValue("email", person.email);
      setValue("url", person.url || "");
      setValue("photo", person.photo || "");
    }
  }, [items, id, setValue]);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch({
      type: "edit",
      id: id,
      name: data.name.trim(),
      email: data.email.trim(),
      url: data.url.trim(),
      photo: data.photo.trim(),
    });

    navigate("/lab3");
  };

  const person = items.find((item) => item.id === id);
  if (!person) {
    return (
      <div className="container mt-4">
        <h1>Błąd</h1>
        <p>Nie znaleziono osoby o podanym ID.</p>
        <button className="btn btn-primary" onClick={() => navigate("/lab3")}>
          Powrót do listy
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1>Edytuj osobę</h1>

      <form className="text-primary" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" value={id} />

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Imię i nazwisko
          </label>
          <input
            id="name"
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            placeholder="Wprowadź imię i nazwisko"
            {...register("name", {
              required: "Imię i nazwisko jest wymagane",
              minLength: {
                value: 2,
                message: "Imię i nazwisko musi mieć minimum 2 znaki",
              },
              maxLength: {
                value: 50,
                message: "Imię i nazwisko może mieć maksymalnie 50 znaków",
              },
            })}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
          <div className="form-text text-muted">Wprowadź od 2 do 50 znaków</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Wprowadź adres email"
            {...register("email", {
              required: "Email jest wymagany",
              minLength: {
                value: 5,
                message: "Email musi mieć minimum 5 znaków",
              },
              maxLength: {
                value: 100,
                message: "Email może mieć maksymalnie 100 znaków",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Nieprawidłowy format email",
              },
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
          <div className="form-text text-muted">
            Wprowadź prawidłowy adres email (5-100 znaków)
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            Strona WWW
          </label>
          <input
            id="url"
            type="url"
            className={`form-control ${errors.url ? "is-invalid" : ""}`}
            placeholder="https://example.com"
            {...register("url", {
              required: "URL strony jest wymagany",
              minLength: {
                value: 5,
                message: "URL musi mieć minimum 5 znaków",
              },
              maxLength: {
                value: 200,
                message: "URL może mieć maksymalnie 200 znaków",
              },
              pattern: {
                value: /^https?:\/\/.+/,
                message: "URL musi zaczynać się od http:// lub https://",
              },
            })}
          />
          {errors.url && (
            <div className="invalid-feedback">{errors.url.message}</div>
          )}
          <div className="form-text text-muted">
            Wprowadź URL strony internetowej (5-200 znaków)
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            URL zdjęcia
          </label>
          <input
            id="photo"
            type="url"
            className={`form-control ${errors.photo ? "is-invalid" : ""}`}
            placeholder="https://example.com/photo.jpg"
            {...register("photo", {
              required: "URL zdjęcia jest wymagany",
              minLength: {
                value: 5,
                message: "URL zdjęcia musi mieć minimum 5 znaków",
              },
              maxLength: {
                value: 200,
                message: "URL zdjęcia może mieć maksymalnie 200 znaków",
              },
              pattern: {
                value: /^https?:\/\/.+/,
                message: "URL musi zaczynać się od http:// lub https://",
              },
            })}
          />
          {errors.photo && (
            <div className="invalid-feedback">{errors.photo.message}</div>
          )}
          <div className="form-text text-muted">
            Wprowadź URL zdjęcia (5-200 znaków)
          </div>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn btn-primary btn-lg me-md-2"
          >
            {isSubmitting ? "Zapisywanie..." : "Zapisz zmiany"}
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

export default Lab4Edit;
