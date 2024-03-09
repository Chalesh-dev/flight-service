import BlogSlider from "@/components/BlogSlider/page";
import SearchBar from "@/components/SearchBar/page";

export default function Home() {
  return (
    // flex min-h-screen flex-col items-center justify-between p-24
    <main className="xl:px-80 sm:px-10 px-4 py-20 screen">
      <SearchBar />
      <BlogSlider />
    </main>
  );
}
