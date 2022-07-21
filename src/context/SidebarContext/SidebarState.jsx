import { useReducer } from "react";

import SidebarReducer from "./SidebarReducer";
import SidebarContext from "./SidebarContext";

import initialState from "./initialState";

import { SET_SHOW_SIDEBAR, SET_SIDEBAR_TAB } from "./types";

const SidebarState = props => {
    const [state, dispatch] = useReducer(SidebarReducer, initialState);

    const setShowSidebar = newValue => {
        dispatch({
            type: SET_SHOW_SIDEBAR,
            payload: newValue,
        });
    };

    const setSidebarTab = newValue => {
        dispatch({
            type: SET_SIDEBAR_TAB,
            payload: newValue,
        });
    };

    return (
        <SidebarContext.Provider value={{ ...state, setShowSidebar, setSidebarTab }}>
            {props.children}
        </SidebarContext.Provider>
    );
};

export default SidebarState;
