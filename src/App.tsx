import "./App.css";
import { useAppSelector } from "./app/hooks";
import { AppRouter } from "./components/elements/AppRouter";
import { selectRole } from "./redux/app/appSlice";
import { privateRoutes } from "./router";
import { getUserCredentialFromStorage } from "./services/auth";

function App() {
  const role = useAppSelector(selectRole) || getUserCredentialFromStorage();
  return (
    <AppRouter
      authorities={role}
      privateRoutes={privateRoutes}
      defaultRedirect="/login"
    />
  );
}

export default App;
