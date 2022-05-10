import React from 'react';

export default function Button() {
  function handleBtn(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <button value="All" onClick={(e) => handleBtn(e)}>
        All
      </button>
      <button value="Typescript" onClick={(e) => handleBtn(e)}>
        Typescript
      </button>
      <button value="English" onClick={(e) => handleBtn(e)}>
        English
      </button>
      <button value="French" onClick={(e) => handleBtn(e)}>
        French
      </button>
      <button value="PHP" onClick={(e) => handleBtn(e)}>
        PHP
      </button>
    </div>
  );
}
