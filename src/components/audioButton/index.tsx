import { useState, useRef, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa6";
import { ImSpinner2 } from "react-icons/im";
import { cn } from "~/utils/classNames"; // Ring loader icon

interface IAudioButtonProps {
  audioPath?: string;
}

export default function AudioButton({ audioPath }: IAudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioPath) {
      return;
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(audioPath);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => null);
    }
  };

  return (
    <button
      onClick={toggleAudio}
      className={cn(
        "flex flex-row gap-1 justify-center items-center self-end hover:opacity-80",
        isPlaying ? "text-[#5ddcd8]" : "text-[#39a9b0]",
      )}
    >
      {isPlaying ? (
        <ImSpinner2 className="animate-spin text-[#5ddcd8]" size={20} />
      ) : (
        <FaCaretRight size={20} className="mt-0.5" />
      )}
      <p className="font-black text-xl">{isPlaying ? "Stop Audio" : "Play Audio"}</p>
    </button>
  );
}
