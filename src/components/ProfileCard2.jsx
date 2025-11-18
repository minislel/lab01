import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";
import RatingBar from "./RatingBar";

function ProfileCard2({
  id,
  children,
  style,
  className,
  rating = 0,
  isChecked = false,
}) {
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/lab4/edit?id=${id}`);
    console.log("Edit clicked for ID:", id);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Czy na pewno chcesz usunąć tę osobę?"
    );
    if (confirmDelete) {
      dispatch({
        type: "delete",
        id: id,
      });
    }
  };

  return (
    <div style={style} className={`${className} position-relative`}>
      <div className="d-flex align-items-center mb-2">
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={isChecked}
          onChange={() => {
            dispatch({
              type: "check",
              id: id,
            });
          }}
        />
        <div className="flex-grow-1">{children}</div>
      </div>

      <div className="mb-3">
        <RatingBar rate={rating} />
      </div>

      <div className="btn-group-vertical w-100 gap-1">
        <button className="btn btn-primary btn-sm" onClick={handleEdit}>
          Edit
        </button>

        <button
          className="btn btn-success btn-sm"
          onClick={() => {
            const newRating = rating >= 10 ? 0 : rating + 1;
            dispatch({
              type: "rate",
              id: id,
              rating: newRating,
            });
          }}
        >
          Rate ({rating}/10)
        </button>

        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProfileCard2;
