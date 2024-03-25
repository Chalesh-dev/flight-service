import Image from "next/image";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";

const LatestBlog = ({ image, date, view, title, summary, key, slug }) => {
  console.log(slug);
  return (
    <div className="w-full flex flex-col mb-10" key={key}>
      <Image
        width={925}
        height={475}
        className="rounded-xl shadow-xl m-auto"
        src={image}
        alt="blog"
      />
      <div className="flex gap-3 my-3 items-center">
        <span>{date}</span>
        <div className="flex gap-1 items-center">
          <IoEyeOutline />
          <span>{view}</span>
        </div>
      </div>
      <Link href={`blogs/${slug}`}>
        <h1 className="hover:text-green-500 w-auto lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold">
          {title}
        </h1>
      </Link>
      <p className="text-[#747577] mt-4">{summary}</p>
    </div>
  );
};

export default LatestBlog;
