import { setError, setShortenedLink, shortenLink } from "../actions/callapi";
import { set } from "mongoose";
import { useState } from "react";
import { useScroll } from "../contexts/ScrollContext";
import { getError } from "../actions/callapi";
import { revalidatePath } from "next/cache";

const TextNButton = async () => {
  const error = await getError();

  const handleSubmit = async (formData: FormData) => {
    "use server";
    setError(!error);
    console.log(formData.get("input_link"));
    shortenLink(formData.get("input_link")?.toString() || "");
    revalidatePath("/");
    // revalidatePath("/");
  };

  // const { sectionRef } = useScroll();

  return (
    <div>
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-col w-full">
          <form
            className="flex w-full gap-12 px-12 items-center"
            action={handleSubmit}
          >
            <div className="w-9/12">
              <input
                type="text"
                name="input_link"
                id=""
                className={`w-full p-4 rounded mt-0 ${
                  error ? "border-4 border-red-500" : ""
                }`}
                placeholder="Shorten a link here"
              />
            </div>
            <button className="text-white bg-cyan hover:bg-blue-300 w-2/12 rounded h-16">
              Shorten It!!
            </button>
          </form>
          <div
            className={`text-red-500 font-thin ${
              error ? "" : " hidden"
            } text-sm mt-0 mx-20`}
          >
            <p className="">Please add a link here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextNButton;
