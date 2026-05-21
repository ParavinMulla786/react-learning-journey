import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ id, name, info, image, price, remove }) {

  const [readMore, setReadMore] = useState(false);

  const description = readMore
    ? info
    : info.substring(0, 100) + "...";

  return (
    <div className="maincontainer">

      <div className="tour-card">

        <img
          src={image}
          className="tour-img"
          alt={name}
        />

        <div className="tour-card-body">

          <h2 className="card-title">{name}</h2>

          <p className="card-text">
            {description}

            <span
              className="read-more"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? " Show Less" : " Read More"}
            </span>
          </p>

          <h4>
            Price :
            <span className="price"> ₹{price}</span>
          </h4>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => remove(id)}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default Card;