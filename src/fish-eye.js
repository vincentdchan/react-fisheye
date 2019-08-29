import React, { useState } from "react";

function nor(num) {
  if (num === 0) return num;
  return num > 0 ? 1 : 0;
}

export function FishEyeItem(props) {
  const handleMouseOver = e => {
    // console.log("mouse over");
    props.onMouseOver(e);
    // console.log(this.containerRef.current);
  };

  const handleMouseOut = e => {
    // console.log("mouse out");
  };

  let translateY = props.scale * nor(props.offset);

  return (
    <div
      data-scale={props.scale}
      data-offset={props.offset}
      style={{
        transform: `scale(${props.scale +
          1}) translateY(${translateY * 10}px)`,
        transformOrigin: '0% 50%',
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {props.children}
    </div>
  );
}

function getScaleSize(index, sum) {
  const x = index;
  return 0.6 * Math.exp(-1 * x * x);
}

export function FishEye(props) {
  const [selectedOne, setSelectedItem] = useState(
    'selectedOne',
  );

  const { data } = props;
  let selectedIndex = props.data
    .map(item => item.key)
    .indexOf(selectedOne);

  const handleContainerMouseOut = () => {
    setSelectedItem('<unknown>');
  };

  if (selectedIndex < 0) {
    selectedIndex = -1 * 10-6;
  }

  return (
    <div onMouseOut={handleContainerMouseOut}>
      {data.map((item, index) => (
        <FishEyeItem
          key={item.key}
          data={item}
          scale={getScaleSize(
            index - selectedIndex,
            data.length,
          )}
          offset={index - selectedIndex}
          isSelected={selectedOne === item.key}
          onMouseOver={() => setSelectedItem(item.key)}
        >
          {props.render(item, index)}
        </FishEyeItem>
      ))}
    </div>
  );
}
