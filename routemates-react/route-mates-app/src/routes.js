import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login.jsx"
const routes = [
  {
    path: "/login",
    component: Login,
  },
  // Other routes
];

export default routes;
