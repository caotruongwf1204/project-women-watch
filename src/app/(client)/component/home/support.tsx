import Image from "next/image";
import '@/app/css/support.css';

export default function Support() {
  return (
    <div className="flex items-center justify-center pt-10 pb-10">
      <div className="container">
        <div className="row support-area">
          <div className="support-main pl-4 pr-4">
            <div className="sup-img flex items-center justify-center">
              <Image
                width={50}
                height={50}
                className="object-cover"
                alt="logo"
                src="/sup1.png"
              />
            </div>
            <div className="sup-content text-center">
              <h5 className="font-bold text-lg">Giao hàng trong 24h</h5>
              <p>Miễn phí giao hàng đơn từ 500.000</p>
            </div>
          </div>
          <div className="support-main pl-4 pr-4">
            <div className="sup-img flex items-center justify-center">
              <Image
                width={50}
                height={50}
                className="object-cover"
                alt="logo"
                src="/sup2.png"
              />
            </div>
            <div className="sup-content text-center">
              <h5 className="font-bold text-lg">Tặng Quà Khuyến Mãi</h5>
              <p>Giảm 5% cho đơn hàng trên 10 triệu</p>
            </div>
          </div>
          <div className="support-main pl-4 pr-4">
            <div className="sup-img flex items-center justify-center">
              <Image
                width={50}
                height={50}
                className="object-cover"
                alt="logo"
                src="/sup3.png"
              />
            </div>
            <div className="sup-content text-center">
              <h5 className="font-bold text-lg">Hỗ Trợ 24/7</h5>
              <p>Tổng đài hỗ trợ trực tuyến 24/7</p>
            </div>
          </div>
          <div className="support-main pl-4 pr-4">
            <div className="sup-img flex items-center justify-center">
              <Image
                width={50}
                height={50}
                className="object-cover"
                alt="logo"
                src="/sup4.png"
              />
            </div>
            <div className="sup-content text-center">
              <h5 className="font-bold text-lg">Tặng Voucher Giảm Giá</h5>
              <p>Voucher cho đơn hàng trên 50 triệu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
