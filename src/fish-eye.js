import React, { useState } from "react";

function nor(num) {
  if (num === 0) return num;
  return num > 0 ? 1 : 0;
}

export function FishEyeItem(props) {
  const handleMouseOver = e => {
    props.onMouseOver(e);
  };

  let translateY = props.scale * nor(props.offset);

  return (
    <div
      className="react-fish-eye-item"
      data-scale={props.scale}
      data-offset={props.offset}
      style={{
        transform: `scale(${props.scale +
          1}) translateY(${translateY * 10}px)`,
        transformOrigin: props.mode === 'horizontal' ? '50% 100%' : '0% 50%',
      }}
      onMouseOver={handleMouseOver}
    >
      {props.children}
    </div>
  );
}

function getScaleSize(index, multiple = 0.6) {
  const x = index;
  return multiple * Math.exp(-1 * x * x);
}

function getContainerStyle(mode = 'vertical') {

  if (mode === 'horizontal') {
    return {
      display: 'flex',
    };
  }

  return {};
}

export function FishEye(props) {
  const [selectedOne, setSelectedItem] = useState(
    'selectedOne',
  );

  const { data, multiple = 0.6, mode } = props;
  
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
    <div
      className="react-fisheye-container"
      onMouseOut={handleContainerMouseOut}
      style={getContainerStyle(mode)}
    >
      {data.map((item, index) => (
        <FishEyeItem
          key={item.key}
          data={item}
          scale={getScaleSize(
            index - selectedIndex,
            multiple,
          )}
          offset={index - selectedIndex}
          isSelected={selectedOne === item.key}
          onMouseOver={() => setSelectedItem(item.key)}
          mode={mode}
        >
          {props.render(item, index)}
        </FishEyeItem>
      ))}
    </div>
  );
}
