import LatestBlog from "@/components/blogs/latestBlog";
import { Pagination } from "@nextui-org/react";

const Blogs = () => {
  const latest = {
    image: "/images/blogs/01.webp",
    date: "03 Apr 2023",
    view: 64,
    title: "How to make toys from old Olarpaper",
    summary:
      "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque bla...",
  };

  const blogs = [
    {
      image: "/images/blogs/03.webp",
      date: "03 Aug 2024",
      view: 14,
      title: "How to make toys from old Olarpaper",
      summary:
        "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque bla...",
    },
    {
      image: "/images/blogs/05.webp",
      date: "05 Dec 2023",
      view: 78,
      title: "How to make humans from old Olarpaper",
      summary:
        "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque bla...",
    },
  ];

  console.log(latest.image_url, "wqwq");
  return (
    <div className="px-[15%]">
      {/* latest article */}
      <LatestBlog
        image={latest.image}
        date={latest.date}
        view={latest.view}
        title={latest.title}
        summary={latest.summary}
      />

      <div className="flex md:flex-row flex-col gap-5">
        {blogs.map((item, index) => (
          <LatestBlog
            image={item.image}
            date={item.date}
            view={item.view}
            title={item.title}
            summary={item.summary}
            key={index}
          />
        ))}
      </div>

      <div className="flex w-full justify-center">
        <Pagination
          showShadow={true}
          color="warning"
          total={10}
          initialPage={1}
        />
      </div>
    </div>
  );
};

export default Blogs;
