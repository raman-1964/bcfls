"use client";
import { validateEmail } from "@/lib/utils";
import { postOpportunitiesApi } from "@/services/opportunities.service";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const OpportunitiesPage = () => {
  const [opportunityData, setOpportunityData] = useState({
    name: "",
    institute: "",
    email: "",
    phone: "",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => postOpportunitiesApi(data),
  });

  const handleOnChange = (e) => {
    setOpportunityData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div className="mx-auto max-w-[1320px] flex items-center flex-col">
      <div class="inline-flex mt-4 mb-8">
        <h2 class="mt-2 text-black/90 text-4xl font-semibold tracking-tighter lg:leading-tight md:leading-tight capitalize drop-shadow-sm pl-3 sm:pl-0">
          Join India Centre for Policy Studies
        </h2>
      </div>
      <div className="flex w-[90vw] sm:w-[25rem] items-start mb-3 flex-col gap-1">
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
          name="name"
          value={opportunityData.name}
          onChange={(e) => handleOnChange(e)}
          className="rounded-[5px] w-full p-2 px-4 outline-none border-none"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px",
          }}
        />
      </div>
      <div className="flex w-[90vw] sm:w-[25rem] items-start mb-3 flex-col gap-1">
        <label
          htmlFor="institute"
          className="w-full flex gap-2 font-bold text-[1rem]"
        >
          Institute
          <div class="bg-[#f3f3f3] mt-1 text-[14px] font-extrabold pt-1 text-[#37352f] rounded-[50%] w-[16px] flex items-center justify-center h-[16px]">
            <span>*</span>
          </div>
        </label>
        <input
          type="text"
          id="institute"
          name="institute"
          value={opportunityData.institute}
          onChange={(e) => handleOnChange(e)}
          className="rounded-[5px] w-full p-2 px-4 outline-none border-none"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px",
          }}
        />
      </div>
      <div className="flex w-[90vw] sm:w-[25rem] items-start mb-3 flex-col gap-1">
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
          name="email"
          value={opportunityData.email}
          onChange={(e) => handleOnChange(e)}
          className="rounded-[5px] w-full p-2 px-4 outline-none border-none"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px",
          }}
        />
      </div>
      <div className="flex w-[90vw] sm:w-[25rem] items-start mb-3 flex-col gap-1">
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
          name="phone"
          value={opportunityData.phone}
          onChange={(e) => handleOnChange(e)}
          className="rounded-[5px] w-full p-2 px-4 outline-none border-none"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px",
          }}
        />
      </div>

      <button
        className="outline-none my-4 border-none bg-black text-[#fff] text-[16px] font-bold rounded px-8 py-1.5"
        onClick={() => {
          if (!opportunityData.name) toast.error("name field is required");
          else if (!opportunityData.email)
            toast.error("email field is required");
          else if (!opportunityData.phone)
            toast.error("phone field is required");
          else if (!opportunityData.institute)
            toast.error("institute field is required");
          else if (!validateEmail(opportunityData.email))
            toast.error("email is invalid");
          else {
            mutate(opportunityData);
            setOpportunityData({
              name: "",
              institute: "",
              email: "",
              phone: "",
            });
          }
        }}
      >
        submit
      </button>
    </div>
  );
};

export default OpportunitiesPage;
