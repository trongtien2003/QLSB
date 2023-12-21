import Banner from "../../components/Banner";
import Services from "./section/Services";
import { News } from "./section/News";
import Help from "./section/Help";
import { useEffect } from "react";

export const HomePages = () => {
    useEffect(() => {
        document.title = "Trang chủ";
    }, []);

    return (
        <>
            <Banner />
            <Services />
            <News />
            <Help />
        </>
    );
};
