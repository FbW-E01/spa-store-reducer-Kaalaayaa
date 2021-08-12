import { useReducer } from 'react'

const initialState = {
    boatSpeed: 0,
    engineStatus: false,
    gear: 0,
}

function reducer(prevState, action) {
    switch(action.type) {
        case "start":
            const randomBool = Math.random() > 0.5 ? true : false;
            return {
                engineStatus: randomBool,
                boatSpeed: prevState.boatSpeed,
                gear: prevState.gear
            }
        case "stop":
            return {
                engineStatus: false,
                gear:  0,
                boatSpeed: prevState.boatSpeed,
            }
        case "gearUp":
            if(prevState.engineStatus === true && prevState.gear < 5) {
                return {
                    engineStatus: prevState.engineStatus,
                    gear:  prevState.gear + 1,
                    boatSpeed: prevState.boatSpeed,
                } 
            } 
            return prevState
        case "gearDown":
            if(prevState.engineStatus === true && prevState.gear > -2) {
                return {
                    engineStatus: prevState.engineStatus,
                    gear:  prevState.gear - 1,
                    boatSpeed: prevState.boatSpeed,
                }
            }
            return prevState
        case "speedUp":
            if(prevState.engineStatus === true) {
                return {
                    engineStatus: prevState.engineStatus,
                    gear:  prevState.gear,
                    boatSpeed: prevState.boatSpeed + (prevState.gear * 5)
                }
            }
            case "slowDown":
                if(prevState.engineStatus === true) {
                return {
                    engineStatus: prevState.engineStatus,
                    gear:  prevState.gear,
                    boatSpeed: prevState.boatSpeed - (prevState.gear * 5)
                }
            }
            default:
                alert("Unknown action!!!");
                return prevState;

            
    }



}

function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log("State is", state)

    const boatStatus = state.engineStatus ? "started" : "stopped"

    return (
        
        <div>
            <h1>Current boat speed: {state.boatSpeed} km/h</h1>
            <h2>Boat is {boatStatus}</h2>
            <h2>Gear: {state.gear}</h2>
            <button onClick = {()=> dispatch({ type: "start" })}>Start</button>
            <button onClick = {()=> dispatch({ type: "stop" })}>Stop</button>
            <button onClick = {()=> dispatch({ type: "gearUp" })}>Gear up</button>
            <button onClick = {()=> dispatch({ type: "gearDown" })}>Gear down</button>
            <button onClick = {()=> dispatch({ type: "speedUp" })}>Faster</button>
            <button onClick = {()=> dispatch({ type: "slowDown" })}>Slower</button>
        </div>
    )
}

export default App;