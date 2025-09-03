"use client";

import Image from "next/image";
import Link from "next/link";

export default function FloatingImage({
  src = "/phone.svg",
  alt = "Action",
  href = "/",
  size = 64,
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`fixed z-50 bottom-6 right-6 rounded-full shadow-lg hover:scale-105 transition-transform ${className}`}
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        priority
        className="rounded-full pointer-events-auto"
      />
    </Link>
  );
}
