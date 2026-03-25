import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllProjects from "./pages/AllProjects";
import Layout from "./layouts/Layout";
import OpenProject from "./pages/OpenProject";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <HomePage />
                    </Layout>
                }
            />

            <Route
                path="/projects"
                element={
                    <Layout>
                        <AllProjects />
                    </Layout>
                }
            />

            <Route
                path="/projects/:id"
                element={
                    <Layout>
                        <OpenProject />
                    </Layout>
                }
            />
        </Routes>
    );
}

export default App;
