import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

export const LayoutSite = () => {
    return (
        <>
            <Header />
            <Menu />
            <Outlet />
            <Footer />
        </>
    );
};
