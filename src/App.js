import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
    const { currentUser } = useContext(AuthContext);
    // console.log(currentUser)

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to={"/login"} />;
        }
        return children;
    };

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/">
                        <Route
                            index
                            element={
                                <ProtectedRoute>
                                    {" "}
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="login"
                            element={<Login />}
                        />
                        <Route
                            path="register"
                            element={<Register />}
                        />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
