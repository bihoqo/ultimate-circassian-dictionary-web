import { FaCaretRight } from "react-icons/fa6";

export default function PanelDiv({
  children,
  audioPath,
}: {
  children: React.ReactNode;
  audioPath?: string;
}) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <button className="flex flex-row gap-1 justify-center items-center self-end hover:opacity-80">
        <FaCaretRight color="#39a9b0" size={20} className="mt-0.5" />
        <p className="font-black text-[#39a9b0] text-xl">Play Audio</p>
      </button>
      <div className="flex flex-row justify-center items-center">{children}</div>
    </div>
  );
}
