import { Link } from "react-router-dom";

function SignUpSuccess() {
    return (
        <section className="container py-5 text-center">
            <h1 className="text-success">Đăng ký thành công</h1>
            <Link to={"/signin"}>Tới trang đăng nhập</Link>
        </section>
    );
}

export default SignUpSuccess;
