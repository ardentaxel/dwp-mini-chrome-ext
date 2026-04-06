import "./PKRow.css";

function PKRow({pk, onIncrement, onDecrement, onCheck, onCancel}) {

  const pgCount = pk.count;
  
  const handlePageIncrement = (e) => {
        e.preventDefault();
        onIncrement(pk.id);
  }

  const handlePageDecrement = (e) => {
        e.preventDefault();
        if (pgCount <= 0) return;
        onDecrement(pk.id);
  }

  const handleCheck = (e) => {
        e.preventDefault();
        onCheck?.(pk.id);
  }

  const handleCancel = (e) => {
        e.preventDefault();
        onCancel?.(pk.id);
  }

  return (
    <div className={`pk-row${pk.mastered ? " mastered" : ""}`}>
      <div className="pk-id">
        {pk.id}
      </div>
      <div className="pg-cnt">{pgCount != 1 ? `${pgCount} pages` : `${pgCount} page`} </div>
      <div className="ctrl-icons">
        <svg className="plus-icon" onClick={handlePageIncrement} 
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 50 50" 
             width="13px" height="13px">
             <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"/>
        </svg>
        <svg className="minus-icon" onClick={handlePageDecrement}
          xmlns="http://www.w3.org/2000/svg"
          width="13px" height="13px" 
          viewBox="0 0 24 24" 
          fill="none">
          <circle cx="12" cy="12" r="10" stroke="black"/>
          <path d="M15 12H9" stroke="black"  stroke-linecap="round"/>
        </svg>
        <svg className="checkmark-icon" onClick={handleCheck}
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 50 50" width="13px" height="13px">
             <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"/>
        </svg>
        <svg className="cancel-icon" onClick={handleCancel}
             xmlns="http://www.w3.org/2000/svg"  
             viewBox="0 0 50 50" 
             width="13px" 
             height="13px">
              <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"/>
        </svg>
      </div>
    </div>
  );
}

export default PKRow;