// Desc: Subscribe section for the landing page
const SubscribeSection = () => {
  return (
    <div className="bg-[#1e293b] rounded-3xl p-12 mt-24 relative overflow-hidden">
      <div className="absolute w-[40%] h-full top-0 right-0 bg-[#7c3aed] opacity-[0.07] blur-[60px] rounded-full"></div>

      <div className="max-w-2xl relative z-10">
        <h2 className="text-3xl font-bold mb-2">不错过任何AI创新</h2>
        <p className="text-[#94a3b8] mb-8">
          订阅我们的每周通讯，获取最新AI工具和资源的更新
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="输入您的邮箱地址"
            className="flex-1 py-4 px-6 bg-white/5 border-2 border-white/10 rounded-lg text-[#f8fafc] text-base focus:outline-none focus:border-[#7c3aed]"
          />
          <button className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] px-6 py-4 font-semibold rounded-lg text-white hover:opacity-90 transition-opacity">
            订阅
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
