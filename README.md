
# React Fisheye 鱼眼效果

React-fisheye is a react component which implements fisheye effect.

![](./public/example-1.gif)

# Installation

Using npm/yarn to install react-fisheye.

```
yarn add react-fisheye
```

# Usage

`data` property should be an array of data objects, which should container
`key` property.

```javascript
const list = [
  { key: "aaa" },
  { key: "bbb" },
  { key: "ccc" },
  { key: "ddd" },
  { key: "eee" },
  { key: "fff" },
  { key: "ggg" },
  { key: "vvv" }
];

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FishEye
        multiple={0.35}
        data={list}
        render={(item, index) => {
          return <div>{item.key + ' ' + index}</div>
        }}
      />
    </div>
  );
}
```
