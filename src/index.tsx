import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <PersistGate persistor={persistor}>
            <Provider store={store}>
                <BrowserRouter basename={"/countries"}>
                    <App/>
                </BrowserRouter>
            </Provider>
        </PersistGate>
    </React.StrictMode>
);
