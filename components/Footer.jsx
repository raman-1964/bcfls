export default function Footer() {
  return (
    <footer>
      <div
        class="w-full bg-[#CCE6FF] relative h-auto"
        style={{
          background:
            "linear-gradient(180deg, #1288fe 11.07%, hsla(0, 0%, 100%, 0) 83.98%)",
        }}
      >
        <div class="w-full bg-[#fff] p-3 rounded-b-[40px] -translate-y-1"></div>
        <div class="px-5">
          <div class="absolute p-10 pointer-events-none z-[0]">
            <img
              class="w-full"
              src="https://prototypr.io/static/images/stars.svg"
            />
          </div>
          <div class=" max-w-6xl mx-auto flex flex-col justify-center items-center  h-full">
            <div class="w-full flex flex-col space-y-4 items-center pt-32 pb-10 z-[1]">
              <h4 class="md:text-[60px] text-[40px] font-inter text-center font-semibold text-[#0F1F40] leading-[40px] md:leading-[70px] max-w-lg">
                Become a contributor
              </h4>
              <div>
                <a href="/apply/form">
                  <button class="p-4 px-8 w-full max-w-[200px] text-[16px] rounded-full bg-[#195DE2] text-white font-medium font-inter border border-[#9DDBFD] border-opacity-40">
                    Apply to join
                  </button>
                </a>
              </div>
            </div>
            <div class="">
              <img
                class=" "
                src="https://prototypr.io/static/images/earth.png"
              />
            </div>
          </div>
        </div>
        <div maxWidth="max-w-[1320px] z-30 relative">
          <div className="w-full max-w-screen-xl relative mx-auto py-16">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12">
                <p className="text-xl tracking-tight font-semibold">
                  {/* {intl.formatMessage({ id: "footer.title" })} */}
                  hello
                </p>
                <input className="hidden" defaultValue={"hello@prototypr.io"} />

                <p className="text-base mt-0 text-gray-700">
                  {/* {intl.formatMessage({ id: "footer.subtitle" })} 💌 */}
                  hello
                </p>

                <p className="text-sm text-gray-700 font-semibold mt-2">
                  {" "}
                  © 2024 Prototypr,{" "}
                  {/* {intl.formatMessage({ id: "footer.copyright" })} */}
                  hello
                </p>
              </div>

              <div className="w-full md:w-6/12">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                    <span className="block uppercase text-gray-900 text-sm font-semibold mb-2 tracking-wide">
                      {/* {intl.formatMessage({ id: "footer.rightCat1" })} */}
                      hello
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://help.prototypr.io"
                          target="_blank"
                        >
                          {/* {intl.formatMessage({ id: "footer.helplink" })} */}
                          hello
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://github.com/Prototypr"
                          target="_blank"
                        >
                          {/* {intl.formatMessage({ id: "footer.rightCat2" })} */}
                          hello
                        </a>
                      </li>
                      <li>
                        {/* <Link href="/posts" as="/posts"> */}
                        <a
                          href="https://open.prototypr.io"
                          target="_blank"
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                        >
                          {/* {intl.formatMessage({ id: "footer.rightCat3" })} */}
                          hello
                        </a>
                        {/* </Link> */}
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://twitter.com/prototypr"
                          target="_blank"
                        >
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://instagram.com/prototyprio"
                          target="_blank"
                        >
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 ml-auto">
                    <span className="block uppercase text-gray-900 text-sm font-semibold mb-2 tracking-wide">
                      {/* {intl.formatMessage({ id: "footer.otherResource" })} */}
                      hello
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://adobe.com/products/xd/adobe-fund.html"
                          target="_blank"
                        >
                          {/* {intl.formatMessage({ id: "footer.other1" })} */}
                          hello
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://grantfortheweb.org"
                          target="_blank"
                        >
                          {/* {intl.formatMessage({ id: "footer.other5" })} */}
                          hello
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://interledger.org/"
                          target="_blank"
                        >
                          {/* {intl.formatMessage({ id: "footer.other2" })} */}
                          hello
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://letter.so"
                          target="_blank"
                        >
                          {/* {intl.formatMessage({ id: "footer.other3" })} */}
                          hello
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://prototypr.io/privacy-policy/"
                          target="_blank"
                        >
                          {/* {intl.formatMessage({ id: "footer.other4" })} */}
                          hello
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
