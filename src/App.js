import {useState, useEffect} from "react"
// Import the following components
import AuthPage from "./Pages/AuthPage/AuthPage"
import ReservationPage from "./Pages/ReservationPage/ReservationPage"

export default function App(){
    const [user, setUser] = useState(null)
    
    return(
        //conditionally rendering based upon whether 
        //the state of useris null(user not logged in) 
        //or not null(user logged in).
        <main className="App">
            {
                user?
                <ReservationPage/>
                :
                <AuthPage/>
            }
        </main>
    )
}


// Ternary expressions: Used to render one component or another.
// Logical (&&) expressions: Used to render a component or nothing.