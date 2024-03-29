"use client";
import Image from "next/image";
interface TablistImage {
  src: string;
  name: string;
}
export default function TabListImage({ src, name }: TablistImage) {
  return (
    <div className="w-[100] h-[100] mb-4">
      <Image src={src} alt={name} objectFit="cover" width={75} height={75} />
    </div>
  );
}
