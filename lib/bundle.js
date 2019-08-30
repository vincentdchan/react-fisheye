import React, { useState } from 'react';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function nor(num) {
  if (num === 0) return num;
  return num > 0 ? 1 : 0;
}

function FishEyeItem(props) {
  var handleMouseOver = function handleMouseOver(e) {
    // console.log("mouse over");
    props.onMouseOver(e); // console.log(this.containerRef.current);
  };

  var handleMouseOut = function handleMouseOut(e) {// console.log("mouse out");
  };

  var translateY = props.scale * nor(props.offset);
  return React.createElement("div", {
    "data-scale": props.scale,
    "data-offset": props.offset,
    style: {
      transform: "scale(".concat(props.scale + 1, ") translateY(").concat(translateY * 10, "px)"),
      transformOrigin: '0% 50%'
    },
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut
  }, props.children);
}

function getScaleSize(index, sum) {
  var x = index;
  return 0.6 * Math.exp(-1 * x * x);
}

function FishEye(props) {
  var _useState = useState('selectedOne'),
      _useState2 = _slicedToArray(_useState, 2),
      selectedOne = _useState2[0],
      setSelectedItem = _useState2[1];

  var data = props.data;
  var selectedIndex = props.data.map(function (item) {
    return item.key;
  }).indexOf(selectedOne);

  var handleContainerMouseOut = function handleContainerMouseOut() {
    setSelectedItem('<unknown>');
  };

  if (selectedIndex < 0) {
    selectedIndex = -1 * 10 - 6;
  }

  return React.createElement("div", {
    onMouseOut: handleContainerMouseOut
  }, data.map(function (item, index) {
    return React.createElement(FishEyeItem, {
      key: item.key,
      data: item,
      scale: getScaleSize(index - selectedIndex, data.length),
      offset: index - selectedIndex,
      isSelected: selectedOne === item.key,
      onMouseOver: function onMouseOver() {
        return setSelectedItem(item.key);
      }
    }, props.render(item, index));
  }));
}

export { FishEye, FishEyeItem };
