import {useContext} from "react";

import AppContext from "../context";

const useStore = () => useContext(AppContext);

export default useStore;