import React from 'react';
import './AnimatedInput.css';

export default function AnimatedInput() {
  return (
    <form className="form_animated">
      <div class="form_wrapper">
        <input type="text" placeholder=" " className="styledInput" />
        <label htmlFor="">Enter your username</label>
      </div>
    </form>
  )
}
