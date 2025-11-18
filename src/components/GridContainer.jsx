import React, { useContext } from "react";
import AppContext from "../data/AppContext";
import ProfileCard2 from "./ProfileCard2";

function GridContainer({ element }) {
  const items = useData();
  const dispatch = useDispatch();
  return (
    <div className="container mt-4">
      <div className="row">
        {items.map((profile) => (
          <div key={profile.id} className="col-md-4 mb-3">
            <ProfileCard2
              id={profile.id}
              className="card p-3"
              rating={profile.rating || 0}
              isChecked={profile.isChecked || false}
              dispatch={dispatch}
            >
              <h5>{profile.name}</h5>
              <p className="text-muted">{profile.email}</p>
            </ProfileCard2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridContainer;
