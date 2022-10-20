import { Routes, Route, Link, useHistory } from "react-router-dom";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import HaderPage from "./HaderPage";
import MainPageComponent from "./main";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
    const history = useHistory();
    return (
        <div>
            <div id="header">
                <HaderPage />
            </div>
            <div id="body">
                <Routes>
                    <Route exact={true} path="/">
                        <MainPageComponent />
                    </Route>
                    <Route exact={true} path="/products/:id">
                        <ProductPage />
                    </Route>
                    <Route exact={true} path="/upload">
                        <UploadPage />
                    </Route>
                </Routes>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default App;
