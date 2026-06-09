import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Przeglad5Letni from "./pages/Przeglad5Letni";
import AdminPage from "./pages/Admin";
import InstalacjaElektryczna from "./pages/InstalacjaElektryczna";
import ModernizacjaInstalacji from "./pages/ModernizacjaInstalacji";
import FotowoltaikaWroclaw from "./pages/FotowoltaikaWroclaw";
import DiagnostykaElektryczna from "./pages/DiagnostykaElektryczna";
import MagazynEnergii from "./pages/MagazynEnergii";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/polityka-prywatnosci"} component={PrivacyPolicy} />
      <Route path={"/przeglad-5-letni"} component={Przeglad5Letni} />
      <Route path={"/instalacja-elektryczna-wroclaw"} component={InstalacjaElektryczna} />
      <Route path={"/modernizacja-instalacji-elektrycznej-wroclaw"} component={ModernizacjaInstalacji} />
      <Route path={"/diagnostyka-elektryczna-wroclaw"} component={DiagnostykaElektryczna} />
      <Route path={"/fotowoltaika-wroclaw"} component={FotowoltaikaWroclaw} />
      <Route path={"/magazyn-energii-wroclaw"} component={MagazynEnergii} />
      <Route path={"/admin"} component={AdminPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
