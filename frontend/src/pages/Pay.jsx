import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyMail } from "../api/booking.service";

function Pay() {
    const [searchParams] = useSearchParams();
    const [text, setText] = useState("");
    const token = searchParams.get("token");
    const id = searchParams.get("id");
    const handlePay = () => {
        const data = {
            token: token,
            id: id,
        };
        verifyMail(data).then((res) => {
            if (res && res.data && res.data.statusCode === 0) {
                setText(res.data.message);
            }
        });
    };
    return (
        <div className="container d-flex justify-content-center align-items-center py-5">
            {text ? (
                text
            ) : (
                <button className="btn btn-primary" onClick={handlePay}>
                    Thanh toán
                </button>
            )}
        </div>
    );
}

export default Pay;
