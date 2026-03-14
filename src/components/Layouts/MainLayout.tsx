import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";
import { ThemeProvider } from "../../context/ThemeContext";

interface MainLayoutProps {
  navOpen: boolean;
  setnavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainLayout: React.FC<MainLayoutProps> = ({ navOpen, setnavOpen }) => {
  return (
    <ThemeProvider>
      <Navbar navOpen={navOpen} setnavOpen={setnavOpen} />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default MainLayout;
