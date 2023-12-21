function Help() {
    const lst = [
        "hướng dẫn thủ tục đối với hành khách",
        "quy định đối với hành khách",
        "giải đáp thông tin",
        "sơ đồ nhà ga",
        "hành lý thất lạc tại sân bay",
        "dịch vụ hỗ trợ tại sân bay",
    ];
    return (
        <section className="container">
            <div className="row">
                {lst.map((item, index) => {
                    return (
                        <div key={index} className="col-md-4">
                            <div className="py-3 border bg-light rounded-3 mb-3">
                                <h6 className="text-uppercase text-center m-0">
                                    <a href="#" className="text-black">
                                        {item}
                                    </a>
                                </h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Help;
