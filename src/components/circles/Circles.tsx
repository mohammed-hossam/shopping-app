import React from 'react';
import './circles.scss';

function Circles() {
  return (
    <div className="circles">
      <div className="circles_outer2">
        <div className="circles_inner">
          <p className="inside-content">382</p>
          <p className="inside-content">sold</p>
          <p className="inside-content">
            <span>out of</span>975
          </p>
        </div>
      </div>
      <div className="win">
        <p className="win_details win_details--1">Win</p>
        <p className="win_details win_details--2">this</p>
      </div>
    </div>
  );
}

export default Circles;
