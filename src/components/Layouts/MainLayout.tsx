import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";
import Footer from "../Footer";

interface MainLayoutProps {
  navOpen: boolean;

  setnavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainLayout: React.FC<MainLayoutProps> = ({ navOpen, setnavOpen }) => {
  return (
    <div>
      <Navbar navOpen={navOpen} setnavOpen={setnavOpen} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
