import React from 'react';
import './add.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Add() {
  return (
    <div className="add">
      <div className="add_curve"></div>
      <div className="add_curve_details">
        <div className="icon">
          <FaPlus />
        </div>
        <p>1</p>
        <div className="icon">
          <FaMinus />
        </div>
      </div>
    </div>
  );
}

export default Add;
