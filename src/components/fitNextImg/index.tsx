import React, { useEffect, useState } from "react";
import { cn } from "~/utils/classNames";
import Image from "next/image";

interface ImageWrapperProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  disabled?: boolean;
  onError?: () => void;
  fallbackSrc?: string; // Add srcOnError prop
}

export default function FitNextImg({
  src,
  alt,
  className,
  imageClassName,
  width,
  height,
  onClick,
  disabled = false,
  onError,
  fallbackSrc = "/tokens/unknown.svg", // Default fallback
}: ImageWrapperProps) {
  const [imageSrc, setImageSrc] = useState<string>(src || fallbackSrc);

  // Update the image source whenever `src` changes
  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  function handleClick() {
    if (onClick && !disabled) {
      onClick();
    }
  }

  function handleError() {
    setImageSrc(fallbackSrc); // Set fallback image on error
    if (onError) {
      onError();
    }
  }

  return (
    <div className={className}>
      <Image
        onClick={handleClick}
        src={imageSrc}
        alt={alt}
        width={9999}
        height={9999}
        style={{ width: width || "100%", height: height || "auto" }}
        onError={handleError}
        className={cn(
          onClick && "cursor-pointer",
          disabled ? "opacity-70" : "opacity-100",
          imageClassName,
        )}
      />
    </div>
  );
}

export function NextImage({
  src,
  alt,
  className,
  imageClassName,
  width,
  height,
  onClick,
  disabled = false,
  onError,
  fallbackSrc = "/tokens/unknown.svg", // Default fallback
}: ImageWrapperProps) {
  const [imageSrc, setImageSrc] = useState<string>(src || fallbackSrc);

  // Update the image source whenever `src` changes
  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  function handleClick() {
    if (onClick && !disabled) {
      onClick();
    }
  }

  function handleError() {
    setImageSrc(fallbackSrc); // Set fallback image on error
    if (onError) {
      onError();
    }
  }

  return (
    <Image
      onClick={handleClick}
      src={imageSrc}
      alt={alt}
      width={9999}
      height={9999}
      style={{ width: width || "100%", height: height || "auto" }}
      onError={handleError}
      className={cn(
        onClick && "cursor-pointer",
        disabled ? "opacity-70" : "opacity-100",
        className,
        imageClassName,
      )}
    />
  );
}
