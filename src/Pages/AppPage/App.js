import { useState, useEffect } from "react"
import "../../styles.css"
//<Route>works by simply rendering the element (instance of a component) 
//assigned to its element prop when its path prop matches the current URL (path) in the address bar!
import { Routes, Route } from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar";
// Import the following components
import AuthPage from "../AuthPage/AuthPage"
import ReservationHistoryPage from "../ReservationHistoryPage/ReservationHistoryPage";
import ReservationPage from "../ReservationPage/ReservationPage"



export default function App(props) {
    const [user, setUser] = useState({})
    const [state, setState] = useState(null)

    const fetchState = async () => {
        try{
            const response = await fetch('/api/test')
            const data = await response.json()
            setState(data)
        } catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        fetchState()
    }, [])

    return (
        <main className='App'>
            {
                user ?
                    <>
                        <NavBar>
                            <Route path="/reservations/new" element={<ReservationPage />} />
                            <Route path="/reservations" element={<ReservationHistoryPage />} />
                        </NavBar>
                    </>
                    :
                    <AuthPage setUser={setUser}/>
            }
        </main>
    )
}


// Ternary expressions: Used to render one component or another.
// Logical (&&) expressions: Used to render a component or nothing
