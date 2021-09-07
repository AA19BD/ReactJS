function App() {
  return React.createElement("div", null, [
    React.createElement(
      "h1",
      { style: { color: "red" } },
      new Date().toLocaleString()
    ),
  ]);
}

ReactDOM.render(React.createElement(App), document.querySelector("#app"));

