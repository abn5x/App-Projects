function Box({topRight, downRight, topLeft, downLeft, topRight2, downRight2, topLeft2, downLeft2}) {
    return (
        <div className="box-wrap">
            <div className="box" style={{
                borderRadius: `${topRight}% ${topLeft}% ${downLeft}% ${downRight}% / ${topRight2}% ${topLeft2}% ${downLeft2}% ${downRight2}%`,
            }}></div>
            {console.log(`${topRight}% ${topLeft}% ${downLeft}% ${downRight}% / ${topRight2}% ${topLeft2}% ${downLeft2}% ${downRight2}%`)}
        </div>
    )
}
function InputRadius({radiusPosition, sliderValue, sliderValue2, onSliderChange, onSliderChange2}) {
    return (
        <React.Fragment>
            <label htmlFor={radiusPosition}>Radius for {radiusPosition} Corner:</label>
            <input onChange={onSliderChange} type="range" min="0" max="100" value={sliderValue} id={radiusPosition}/>
            <span>{sliderValue}%</span>
            <input onChange={onSliderChange2} type="range" min="0" max="100" value={sliderValue2} id={radiusPosition}/>
            <span>{sliderValue2}%</span>
        </React.Fragment>
    )
}

function App(props) {
    const [topLeft, setSliderTL] = React.useState(0)
    const [downLeft, setSliderBL] = React.useState(0)
    const [topRight, setSliderTR] = React.useState(0)
    const [downRight, setSliderBR] = React.useState(0)

    const [topLeft2, setSliderTL2] = React.useState(0)
    const [downLeft2, setSliderBL2] = React.useState(0)
    const [topRight2, setSliderTR2] = React.useState(0)
    const [downRight2, setSliderBR2] = React.useState(0)

    var copyText = `border-radius: ${topRight}% ${topLeft}% ${downLeft}% ${downRight}% / ${topRight2}% ${topLeft2}% ${downLeft2}% ${downRight2}%`
    
    return (
        <React.Fragment>
            <Box topRight={topRight} downRight={downRight} topLeft={topLeft} downLeft={downLeft} topRight2={topRight2} downRight2={downRight2} topLeft2={topLeft2} downLeft2={downLeft2}></Box>
            <div className="settings">
                <InputRadius radiusPosition="Top Left" sliderValue={topLeft} onSliderChange={event => setSliderTL(event.target.value)} sliderValue2={topLeft2} onSliderChange2={event => setSliderTL2(event.target.value)} ></InputRadius>
                <br/>
                <InputRadius radiusPosition="Bottom Left" sliderValue={downLeft} onSliderChange={event => setSliderBL(event.target.value)} sliderValue2={downLeft2} onSliderChange2={event => setSliderBL2(event.target.value)}></InputRadius>
                <br/>
                <InputRadius radiusPosition="Top Right" sliderValue={topRight} onSliderChange={event => setSliderTR(event.target.value)} sliderValue2={topRight2} onSliderChange2={event => setSliderTR2(event.target.value)}></InputRadius>
                <br/>
                <InputRadius radiusPosition="Bottom Right" sliderValue={downRight} onSliderChange={event => setSliderBR(event.target.value)} sliderValue2={downRight2} onSliderChange2={event => setSliderBR2(event.target.value)}></InputRadius>
                <br/>
                <button onClick={navigator.clipboard.writeText(copyText)}>Copy CSS to Clipboard</button>
            </div>
        </React.Fragment>
    )
       
}

const rootElement = document.getElementById("App")
ReactDOM.render(<App></App>, rootElement)