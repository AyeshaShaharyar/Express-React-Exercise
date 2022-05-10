import React from 'react';

export default function Button(props) {
  function handleBtn(event) {
    console.log(event.target.value);
  }
  return (
    <div>
      <button value="All" onClick={() => handleBtn(props.handleBtn)}>
        All
      </button>
      <button value="Typescript" onClick={() => handleBtn(props.handleBtn)}>
        Typescript
      </button>
      <button value="English" onClick={() => handleBtn(props.handleBtn)}>
        English
      </button>
      <button value="French" onClick={() => handleBtn(props.handleBtn)}>
        French
      </button>
      <button value="PHP" onClick={() => handleBtn(props.handleBtn)}>
        PHP
      </button>
    </div>
  );
}
