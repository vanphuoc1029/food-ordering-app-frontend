import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tìm kiếm quán bún chả quanh đây
        </h1>
        <span className="text-xl">
          Món ngon đang chờ bạn chỉ với 1 cú click chuột!
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Giao hàng thần tốc
          </span>
          <span>
            Tải ứng dụng BunCha để nhận đặt hàng nhanh hơn và tối ưu hóa trải
            nghiệm cá nhân của bạn
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
