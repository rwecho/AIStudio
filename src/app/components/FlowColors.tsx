// Desc: Floating elements with gradient colors
const FlowColors = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      <div className="absolute w-[300px] h-[300px] top-[10%] left-[-150px] bg-gradient-to-br from-[#7c3aed] to-[#ec4899] rounded-full opacity-10 blur-[50px]"></div>
      <div className="absolute w-[200px] h-[200px] top-[40%] right-[-100px] bg-gradient-to-br from-[#ec4899] to-[#06b6d4] rounded-full opacity-10 blur-[50px]"></div>
      <div className="absolute w-[250px] h-[250px] bottom-[10%] left-[20%] bg-gradient-to-br from-[#06b6d4] to-[#7c3aed] rounded-full opacity-10 blur-[50px]"></div>
    </div>
  );
};

export default FlowColors;
