const rootElement = document.getElementById("App");

function InputBar(props) {
    const [value, setValue] = React.useState("")
    const [decimal, setDecimal] = React.useState("");
    function handleChange(event) {
        const binaryValue = event.target.value;
        const lastDigit = binaryValue[binaryValue.length - 1];
        if (binaryValue.length == 0) {
            setValue("")
        } else if ((lastDigit == "0" || lastDigit == "1") && binaryValue.length < 9) {
            setValue(binaryValue)
            setDecimal(parseInt(binaryValue, 2))
        }
        console.log(decimal)
    }
    return (
      <div id="inputBar">
        <div id="inner">
        <h1>Binary Converter</h1>
      <form>
        <label htmlFor="value">Binary Value: </label>
        <input autocomplete="off" placeholder="Only 0 and 1 allowed." value={value} onChange={handleChange} id="value" />
        </form>
        <hr/>
      {value ? <strong>The decimal number is: {decimal}</strong> : <i>Please type your binary number</i>}

        </div>
    </div>
    )
}
console.dir(rootElement)
ReactDOM.render(<InputBar></InputBar>, rootElement)