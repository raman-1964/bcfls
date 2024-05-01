import NewsCard from "@/components/NewsCard";

const NewsEventsPage = () => {
  return (
    <div class="w-full my-8 p-6 pt-0 pb-0 z-10 relative max-w-[1320px] px-6 md:px-3 mx-auto backdrop-blur-sm backdrop-opacity-20 h-full">
      <div className="flex gap-5 items-center justify-start">
        <button class="inline-block text-base px-3 cursor-pointer bg-[#ecf0f5] hover:bg-gray-200 text-zinc-600 font-medium hover:text-zinc-900 rounded-full tracking-tight h-10 transition transition-all duration-400">
          Past
        </button>
        <button class="inline-block text-base px-3 cursor-pointer bg-[#ecf0f5] hover:bg-gray-200 text-zinc-600 font-medium hover:text-zinc-900 rounded-full tracking-tight h-10 transition transition-all duration-400">
          Ongoing
        </button>
        <button class="inline-block text-base px-3 cursor-pointer bg-[#ecf0f5] hover:bg-gray-200 text-zinc-600 font-medium hover:text-zinc-900 rounded-full tracking-tight h-10 transition transition-all duration-400">
          Upcoming
        </button>
      </div>

      <div class="inline-flex mt-4 mb-12">
        <h2 class="mt-2 text-black/90 text-5xl font-semibold tracking-tighter xl:text-[48px] lg:leading-tight md:leading-tight capitalize drop-shadow-sm ">
          News/Events
        </h2>
      </div>

      <NewsCard is_home_page={false} />
    </div>
  );
};

export default NewsEventsPage;
