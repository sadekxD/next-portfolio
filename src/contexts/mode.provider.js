import { useReducer } from "react";
import { ModeContext } from "./mode.context";

const initialState = {
	darkMode: true,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "TOGGLE":
			return {
				...state,
				darkMode: !state.darkMode,
			};
		default:
			return state;
	}
};

export const ModeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<ModeContext.Provider value={{ state, dispatch }}>
			{children}
		</ModeContext.Provider>
	);
};
