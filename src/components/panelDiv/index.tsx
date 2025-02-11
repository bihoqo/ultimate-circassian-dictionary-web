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
    <div className="flex flex-col justify-center items-center w-full">
      {audioPath && (
        <div className="w-full flex flex-row justify-end items-center">
          {audioPath && <AudioButton audioPath={audioPath} />}
        </div>
      )}
      <div className="flex flex-col gap-6 items-center justify-center w-full">{children}</div>
    </div>
  );
}
