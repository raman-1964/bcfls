const ApplyPage = () => {
  return (
    <div className="mx-auto max-w-[1320px] flex items-center flex-col">
      <div className="flex w-[25rem] items-start mb-3 flex-col gap-1">
        <label
          htmlFor="name"
          className="w-full flex gap-2 font-bold text-[1rem]"
        >
          Name
          <div class="bg-[#f3f3f3] mt-1 text-[14px] font-extrabold pt-1 text-[#37352f] rounded-[50%] w-[16px] flex items-center justify-center h-[16px]">
            <span>*</span>
          </div>
        </label>
        <input
          type="text"
          id="name"
          className="rounded-[5px] w-full p-2 px-4 outline-none border-none"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px",
          }}
        />
      </div>
      <div className="flex w-[25rem] items-start mb-3 flex-col gap-1">
        <label htmlFor="institute" className="w-full font-bold text-[1rem]">
          Institute
        </label>
        <input
          type="text"
          id="institute"
          className="rounded-[5px] w-full p-2 px-4 outline-none border-none"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px",
          }}
        />
      </div>
      <div className="flex w-[25rem] items-start mb-3 flex-col gap-1">
        <label htmlFor="qualification" className="w-full font-bold text-[1rem]">
          Qualification
        </label>
        <input
          type="text"
          id="qualification"
          className="rounded-[5px] w-full p-2 px-4 outline-none border-none"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px",
          }}
        />
      </div>
      <div className="flex w-[25rem] items-start mb-3 flex-col gap-1">
        <label htmlFor="interest" className="w-full font-bold text-[1rem]">
          Area of Interest
        </label>
        <input
          type="text"
          id="interest"
          className="rounded-[5px] w-full p-2 px-4 outline-none border-none"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px",
          }}
        />
      </div>
      <div className="flex w-[25rem] items-start mb-3 flex-col gap-1">
        <label
          htmlFor="email"
          className="w-full flex gap-2 font-bold text-[1rem]"
        >
          Email
          <div class="bg-[#f3f3f3] mt-1 text-[14px] font-extrabold pt-1 text-[#37352f] rounded-[50%] w-[16px] flex items-center justify-center h-[16px]">
            <span>*</span>
          </div>
        </label>
        <input
          type="text"
          id="email"
          className="rounded-[5px] w-full p-2 px-4 outline-none border-none"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px",
          }}
        />
      </div>
      <div className="flex w-[25rem] items-start mb-3 flex-col gap-1">
        <label
          htmlFor="phone"
          className="w-full flex gap-2 font-bold text-[1rem]"
        >
          Phone
          <div class="bg-[#f3f3f3] mt-1 text-[14px] font-extrabold pt-1 text-[#37352f] rounded-[50%] w-[16px] flex items-center justify-center h-[16px]">
            <span>*</span>
          </div>
        </label>
        <input
          type="text"
          id="phone"
          className="rounded-[5px] w-full p-2 px-4 outline-none border-none"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px",
          }}
        />
      </div>

      <button className="outline-none my-4 border-none bg-black text-[#fff] text-[16px] font-bold rounded px-8 py-1.5">
        submit
      </button>
    </div>
  );
};

export default ApplyPage;
