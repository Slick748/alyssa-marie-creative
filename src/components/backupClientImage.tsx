"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ClientImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export default function ClientImage({
  fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%23DCE6D4' width='800' height='600'/%3E%3Ctext fill='%235A6B5D' font-family='system-ui' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EImage%3C/text%3E%3C/svg%3E",
  src,
  alt,
  ...props
}: ClientImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
