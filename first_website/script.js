// const a = document.getElementById("custom")
// a.innerHTML = "Changed"

function App({ name }) {
    // fetch("")
    
    return React.createElement(
        "div",
        null,
        "Hello, " + name
    )
}

ReactDOM.render(React.createElement(App, { name: "Dora" }),
    document.getElementById("root"))