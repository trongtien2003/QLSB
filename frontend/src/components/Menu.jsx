import { Link } from "react-router-dom";

function Menu() {
    const m = [
        {
            name: "Giới thiệu",
            link: "/about",
        },
        {
            name: "Tin tức",
            link: "/news",
        },
        {
            name: "Đặt vé",
            link: "/booking",
        },
        {
            name: "Tra cứu",
            link: "/tracking",
        },
    ];
    return (
        <div className="container">
            <ul className="nav justify-content-center bg-primary-subtle py-2 shadow-lg">
                <li className="nav-item">
                    <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                    >
                        Trang chủ
                    </Link>
                </li>
                {m.map((item, index) => {
                    return (
                        <li key={index} className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to={item.link}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Menu;
