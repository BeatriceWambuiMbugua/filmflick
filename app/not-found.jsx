import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Link href="/">
        <Image
          src="/404.jpg"
          alt="Not Found"
          width={400}
          height={400}
          className="w-full h-screen object-cover"
        />
      </Link>
    </div>
  );
}
