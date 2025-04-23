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
    <div className="flex w-full flex-col items-center justify-center gap-4">
      {audioPath && (
        <div className="flex w-full flex-row items-center justify-end">
          {audioPath && <AudioButton audioPath={audioPath} />}
        </div>
      )}
      <div className="flex w-full flex-col items-center justify-center gap-6">{children}</div>
    </div>
  );
}
