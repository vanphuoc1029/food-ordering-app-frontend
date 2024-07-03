const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          BunCha.com
        </span>
        <span className="text-white tracking-tight flex gap-4">
          <span>Chính sách cá nhân</span>
          <span>Điều khoản sử dụng</span>
          <span>Liên hệ</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;