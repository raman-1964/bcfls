import React from "react";

const NewsEventsPage = () => {
  return (
    <div class="w-full my-8 p-6 pt-0 pb-0 z-10 relative max-w-[1320px] px-6 md:px-3 mx-auto backdrop-blur-sm backdrop-opacity-20 h-full">
      <div class="inline-flex mt-4 mb-4">
        <h2 class="mt-2 text-black/90 text-5xl font-semibold tracking-tighter xl:text-[48px] lg:leading-tight md:leading-tight capitalize drop-shadow-sm ">
          News/Events
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        {[...Array(9).keys()].map(() => (
          <div class="w-full">
            <div class="flex group hover:shadow-lg hover:scale-[1.005] h-full sm:mt-0 flex-col hover:bg-white transition transition-all duration-300 p-3 bg-white shadow-sm border border-gray-300/60 rounded-2xl font-inter w-full">
              <div class="w-full shrink-0 h-[240px] max-w-full md:h-[240px] md:max-w-full relative rounded-xl overflow-hidden border border-gray-100">
                <a href="/post/adaptive-cursor-mouse-touch">
                  <img
                    alt="Touch-First Cursor: Round Pointers vs. Mouse Arrows"
                    loading="lazy"
                    class="object-cover absolute w-full h-full group-hover:scale-[1.03] transition transition-all duration-700 cursor-pointer"
                    sizes="100vw"
                    src="https://prototyprio.gumlet.io/strapi/4b5c24a0784944388b876737b92d9f1a.png?w=3840&amp;q=75&amp;format=webp&amp;compress=true&amp;dpr=2"
                    style={{
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </a>
              </div>
              <div class="mt-3 flex flex-col px-[10px] justify-between h-full">
                <div class="flex flex-col justify-start">
                  <a href="/post/adaptive-cursor-mouse-touch">
                    <h2 class="text-lg tracking-tight mb-3 font-medium leading-snug line-clamp-2">
                      Touch-First Cursor: Round Pointers vs. Mouse Arrows
                    </h2>
                  </a>
                  <a href="/post/adaptive-cursor-mouse-touch">
                    <div class="mb-6 text-gray-600 line-clamp-2">
                      Apple reinvented the mouse cursor to be 'touch-first' on
                      the iPadOS, building on the original mouse pointer, and
                      adding 'Pointer Magnetism' and more accessibility
                      features. Here's a look at rounded pointers vs arrow
                      pointers.{" "}
                    </div>
                  </a>
                  <div class="mb-3.5">
                    <a href="/people/graeme">
                      <div class="flex font-inter w-full max-w-[300px]">
                        <div class="relative h-[28px] w-[28px] rounded-full overflow-hidden">
                          <img
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            srcSet="https://prototypr.io/_next/image?url=https%3A%2F%2Fprototypr-media.sfo2.digitaloceanspaces.com%2Fstrapi%2F18400a0ccad1d33a67530a8826638ce8.png&w=1920&q=75"
                            class="object-cover gm-added gm-observing gm-observing-cb"
                            sizes="100vw"
                          />
                        </div>
                        <div class="pl-1.5 flex my-auto flex-wrap">
                          <h2 class="line-clamp-1 my-auto font-regular text-sm">
                            Graeme Fulton
                          </h2>
                          <div class="px-1 text-sm my-auto text-gray-500 font-bold hidden md:inline-block">
                            ·
                          </div>
                          <p class="md:line-clamp-1 my-auto text-gray-500 text-sm hidden md:inline-block">
                            <time
                              datetime="1655679600000"
                              class="text-xs text-gray-500 my-auto"
                            >
                              Jun 20
                            </time>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="flex text-xs">
                  <a href="/posts/product-design/page/1">
                    <div class=" capitalize inline-block text-xs px-2 py-0.5 font-medium bg-[#ecf0f5] text-black/80 rounded-full mr-2">
                      product design
                    </div>
                  </a>
                  <a href="/posts/ui/page/1">
                    <div class="hidden xl:inline-block capitalize inline-block text-xs px-2 py-0.5 font-medium bg-[#ecf0f5] text-black/80 rounded-full mr-2">
                      UI
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsEventsPage;
