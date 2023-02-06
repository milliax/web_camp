
function Hello(){
    return (
        <div>Hello</div>
    )
}

function Greeting({ name }) {
    const age = 17
    return (
        <React.Fragment>
            <h1>Nice to see YOU, {name}</h1>
            <h1>{name} is {age} years old</h1>
        </React.Fragment>
    )
}

ReactDOM.render(
    <Greeting name="Diago" />,
    document.getElementById("root")
)