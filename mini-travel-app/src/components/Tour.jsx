import React from 'react';
import Card from './Card';

function Tour({ data, remove }) {

  if (data.length === 0) {
    return (
      <div className="refresh-container">
        <h1>No Tours Left</h1>
      </div>
    );
  }

  return (
    <div>

      <div className="heading-container">
  <h1 className="heading">Plan For Tour</h1>
</div>

      <div className="tour-container">

        {data.map((items) => (
          <Card
            key={items.id}
            {...items}
            remove={remove}
          />
        ))}

      </div>

    </div>
  );
}

export default Tour;