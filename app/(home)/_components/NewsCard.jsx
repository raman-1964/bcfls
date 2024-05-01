import Image from "next/image";
import Heading from "./Heading";
import { getNewsEventsApi } from "@/services/news-events.services";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@/components/skeleton/Skeleton";
import { useRouter } from "next/navigation";

const NewsCard = () => {
  const router = useRouter();
  const { isLoading, isRefetching, data } = useQuery({
    queryKey: ["NewsEvents"],
    enabled: true,
    queryFn: () => getNewsEventsApi(true),
  });

  return (
    <>
      <section className="bg-gray-100 relative">
        <hr className="border-accent-2" />
        <img
          src="/svg/squares2.svg"
          className="w-full h-[100%] absolute object-cover opacity-20"
          loading="lazy"
        ></img>
        <div className="max-w-[1320px] mx-auto  pb-20 relative z-10 mt-20">
          <Heading heading="News" href="/news-events" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full px-4 sm:px-0">
            {!isLoading ? (
              <>
                {data.data.map((e) => (
                  <div
                    className="flex group hover:shadow-lg hover:scale-[1.005] h-full sm:mt-0 flex-col hover:bg-white  transition-all duration-300 p-3 bg-white shadow-sm border border-gray-300/60 rounded-2xl font-inter w-full cursor-pointer"
                    onClick={() => router.push(`news-events/${e.id}`)}
                  >
                    <Image
                      src={e.image}
                      alt="logo"
                      className="w-full shrink-0 h-[240px] max-w-full md:h-[240px] md:max-w-full relative rounded-xl overflow-hidden border border-gray-100"
                      width={1000}
                      height={1000}
                    />
                    <div className="mt-3 flex flex-col px-[10px] justify-between h-full">
                      <h1 className="text-lg tracking-tight mb-3 font-medium leading-snug line-clamp-2">
                        {e.title}
                      </h1>
                      <p className="mb-6 text-gray-600 line-clamp-2">
                        {e.description}
                      </p>
                      <div class="flex w-full my-auto items-start justify-between">
                        <div className="flex flex-1 flex-wrap gap-1">
                          {e.keynoteSpeaker.map((sp) => (
                            <h2 className="capitalize inline-block text-xs px-2 py-0.5 font-medium bg-[#ecf0f5] text-black/80 rounded-full">
                              {sp.name}
                            </h2>
                          ))}
                        </div>

                        <div className="hidden md:flex w-[100px]">
                          <p class="px-1 text-sm my-auto text-gray-500 mt-[-0.25rem] font-bold">
                            .
                          </p>
                          <p class="md:line-clamp-1 my-auto text-gray-500 text-sm">
                            {e.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {[...Array(3).keys()].map(() => (
                  <Skeleton className="h-[40vh] rounded-2xl" />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsCard;
