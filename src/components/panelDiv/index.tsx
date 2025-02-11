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
      {audioPath && <AudioButton audioPath={audioPath} />}
      <div className="flex flex-col justify-center items-center gap-6">{children}</div>
    </div>
  );
}
