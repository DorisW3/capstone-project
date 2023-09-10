import Image from "next/image";

export default function Gallery() {
  return (
    <Image
      src="/gallery.png"
      alt="gallery icon from flaticon"
      width={35}
      height={35}
    />
  );
}
