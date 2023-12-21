import * as easyinvoice from 'easyinvoice';
import * as fs from 'fs';
export const handleInvoice = async () => {
  const data = {
    // Your own data
    sender: {
      company: 'Phan Duan',
      address: '20, Tang Nhon Phu, Phuoc Long B, TP. Thu Duc',
      city: 'Ho Chi Minh City Industry and Trade College',
      country: 'Vietnam',
      //"custom1": "custom value 1",
      //"custom2": "custom value 2",
      //"custom3": "custom value 3"
    },
    // Your recipient
    client: {
      company: 'Khách hàng',
      country: 'Vietnam',
      // "custom1": "custom value 1",
      // "custom2": "custom value 2",
      // "custom3": "custom value 3"
    },
    information: {
      // Invoice number
      number: new Date().getTime().toString(),
      // Invoice data
      date: new Date().toDateString(),
    },
    products: [
      {
        quantity: '2',
        description: 'Product 1',
        'tax-rate': 6,
        price: 33.87,
      },
    ],
    'bottom-notice': 'Kindly pay your invoice within 15 days.',
    // Translate your invoice to your preferred language
  };

  //Create your invoice! Easy!
  const result = await easyinvoice.createInvoice(data);
  const n = new Date().getTime();
  fs.writeFileSync(`pd-invoice/${n}-invoice.pdf`, result.pdf, 'base64');
};
