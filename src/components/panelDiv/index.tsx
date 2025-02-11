import AudioButton from "~/components/audioButton";
import React from "react";

export default function PanelDiv({
  children,
  audioPath,
}: {
  children: React.ReactNode;
  audioPath?: string;
}) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <AudioButton audioPath={audioPath} />
      <div className="flex flex-row justify-center items-center">{children}</div>
    </div>
  );
}
