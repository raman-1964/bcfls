"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

const SingleImagePage = () => {
  const params = useParams();
  return (
    <div className="mt-20 w-full mx-auto flex items-center justify-center">
      <div className="w-full max-w-[1320px] flex items-center justify-center">
        <Image
          className="object-cover rounded-md"
          width={1000}
          height={1000}
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${params.id}`}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default SingleImagePage;
