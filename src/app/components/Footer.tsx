// Desc: Footer component for the landing page

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 mt-24 py-12 border-t border-white/5 text-center">
      <div className="flex justify-center flex-wrap gap-8 mb-8">
        <a
          href="/about"
          className="text-[#94a3b8] hover:text-[#06b6d4] transition-colors"
        >
          关于我们
        </a>
        <a
          href="/sites/new"
          className="text-[#94a3b8] hover:text-[#06b6d4] transition-colors"
        >
          提交网站
        </a>
        <a
          href="/privacy"
          className="text-[#94a3b8] hover:text-[#06b6d4] transition-colors"
        >
          隐私政策
        </a>
        <a
          href="/contact"
          className="text-[#94a3b8] hover:text-[#06b6d4] transition-colors"
        >
          联系我们
        </a>
      </div>
      <div className="text-sm text-[#94a3b8]">
        © 2025 <strong>AI Studio X</strong> 保留所有权利。
      </div>
    </footer>
  );
};

export default Footer;
