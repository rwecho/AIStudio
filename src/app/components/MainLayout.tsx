import FlowColors from "./FlowColors";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#0f172a] text-[#f8fafc] min-h-screen overflow-x-hidden">
      {/* Floating Elements */}
      <FlowColors></FlowColors>
      <Header></Header>
      <main className="max-w-7xl mx-auto px-4 pb-20">{children}</main>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
