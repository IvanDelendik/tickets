import React from "react";
import "./BigPoster.scss";
import Header from "../../Header/Header";

import { useDispatch, useSelector } from "react-redux";

const BigPoster = () => {
  const dispatch = useDispatch();

  const addTickets = () => {
    dispatch({ type: "ADD_TICKETS", payload: 1 });
  };

  const delTickets = () => {
    dispatch({ type: "DEL_TICKETS", payload: 1 });
  };

  const tickets = useSelector((state) => state.tickets.tickets);

  return (
    <div className="bigposter">
      <Header />
      <div className="bigposter-items">
        <p>фантастика, боевик, триллер, 16+</p>
        <h1>Довод</h1>
        <p>с 23 апреля</p>
        <button onClick={() => addTickets()} className="button">
          Купить билет
        </button>
        {tickets > 0 ? (
          <div>
            <span> {tickets}</span>
            <button onClick={() => delTickets()} className="button">
              удалить билет
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BigPoster;
