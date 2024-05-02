"use client";
import Image from "next/image";
import Heading from "../app/(home)/_components/Heading";
import Skeleton from "@/components/skeleton/Skeleton";
import { useRouter } from "next/navigation";
import { getNewsEventsApi } from "@/services/news-events.services";
import { useQuery } from "@tanstack/react-query";

const NewsCard = ({ is_home_page = true }) => {
  const router = useRouter();

  const { isLoading, data } = useQuery({
    queryKey: ["NewsEvents", is_home_page],
    enabled: true,
    queryFn: () => getNewsEventsApi(is_home_page),
  });

  return (
    <>
      <section className={`${is_home_page ? "bg-gray-100" : ""} relative`}>
        {is_home_page ? (
          <>
            <hr className="border-accent-2" />
            <img
              src="/svg/squares2.svg"
              className="w-full h-[100%] absolute object-cover opacity-20"
              loading="lazy"
            ></img>
          </>
        ) : null}

        <div
          className={`max-w-[1320px] mx-auto pb-20 relative z-10 ${
            is_home_page ? "mt-20:" : ""
          }`}
        >
          {is_home_page ? <Heading heading="News" href="/news-events" /> : null}
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
                    <div className="mt-2 flex flex-col px-[10px] justify-between h-full">
                      <h1 className="text-lg tracking-tight mb-2 font-medium leading-snug line-clamp-2">
                        {e.title}
                      </h1>
                      {/* <p className="mb-6 text-gray-600 line-clamp-2">
                        {e.description}
                      </p> */}
                      <div className="flex w-full my-auto flex-wrap items-start justify-start gap-2">
                        {e?.keynoteSpeaker?.map((sp) => (
                          <h2 className="capitalize inline-block text-[0.9rem] px-2 py-0.5 font-medium bg-[#ecf0f5] text-black/80 rounded-full">
                            {sp.name}
                          </h2>
                        ))}
                      </div>
                      <p className="md:line-clamp-1 text-gray-500 text-sm mt-2">
                        <span className="text-black">Venue: </span>{" "}
                        {e.venue}
                      </p>
                      <div className="flex w-full mt-4 flex-wrap items-center justify-between gap-4">
                        <p className="md:line-clamp-1 text-gray-500 text-sm">
                          {e.date}
                        </p>
                        <p className="md:line-clamp-1 text-gray-500 text-sm">
                          {e.mode}
                        </p>
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
