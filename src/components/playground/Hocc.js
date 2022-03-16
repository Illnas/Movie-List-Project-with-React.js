import React, { useState } from "react";


const ClickCounter = (props) => {
  return (
    <div>
      <button onClick={() => props.handleClick()}>
        Kliknuto {props.count} puta!
      </button>
    </div>
  );
};

const HoverCounter = (props) => {
  return (
    <h2 onMouseOver={() => props.handleClick()}>Hoverano {props.count} puta</h2>
  );
};

const PressCounter = (props) => {
  return (
    <div>
      <input onKeyDown={() => props.handleClick()} />
      <div>Pritisnuto {props.count} puta</div>
    </div>
  );
};

const withCount = (Component) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count + 1);
    };

    return <Component {...props} count={count} handleClick={handleClick} />;
  };

  return NewComponent;
};

const EnrichedHoverCounter = withCount(HoverCounter);
const EnrichedClickCounter = withCount(ClickCounter);
const EnrichedPressCounter = withCount(PressCounter);

const Hocc = () => {
  return (
    <div>
      <EnrichedHoverCounter />
      <EnrichedClickCounter />
      <EnrichedPressCounter />
    </div>
  );
};

export default Hocc;
