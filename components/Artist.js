import Image from "next/image";

export default function Artist() {
  return (
    <Image
      src="/artist.png"
      alt="artist icon from flaticon"
      width={35}
      height={35}
    />
  );
}
