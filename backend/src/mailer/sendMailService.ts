import * as nodemailer from 'nodemailer';
function padTo2Digits(num: any) {
  return num.toString().padStart(2, '0');
}
export function formatDate(date: any) {
  date = new Date(date);
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('-');
}
export const sendSimpleEmail = async (dataSend: any) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'cuongnm.info@gmail.com', // generated ethereal user
      pass: 'owklhepesolkscsy', // generated ethereal password
    },
  });

  // send mail with defined transport object
  const htmlContent = `<h3>Xin chào ${dataSend.name}</h3>
                        <p>Thông tin chuyến bay của bạn như sau: </p>
                        <fieldset>
                            <legend style="margin-bottom: 10px; font-weight: bold;">Thông tin chuyến bay</legend>
                            <label>Chuyến bay số:</label>
                            <span>${dataSend.flightNumber}</span><br>
                            <label>Hãng hàng không:</label>
                            <span>${dataSend.airline}</span><br>
                            <label>Mã đặt chỗ:</label>
                            <span>${dataSend.seatId}</span><br>
                            <label>Khởi hành từ:</label>
                            <span>${dataSend.source}</span><br>
                            <label>Đến:</label>
                            <span>${dataSend.destination}</span><br>
                            <label>Ngày khởi hành:</label>
                            <span>${formatDate(dataSend.date)}</span><br>
                            <label>Giờ khởi hành:</label>
                            <span>${dataSend.time}</span><br>
                        </fieldset>
                        <p>Vui lòng truy cập vào <a href="${
                          dataSend.redirectLink
                        }" target="?_blank">liên kết này</a> để xác nhận thanh toán.</p>
                        <p>Chúc bạn một ngày tốt lành</p>`;
  await transporter.sendMail({
    from: '"Phan Huu Nghi 👻" <foo@example.com>', // sender address
    to: dataSend.receiverEmail, // list of receivers
    subject: 'Thông tin chuyến bay', // Subject line
    text: 'Hello world?', // plain text body
    html: htmlContent, // html body
  });
};
