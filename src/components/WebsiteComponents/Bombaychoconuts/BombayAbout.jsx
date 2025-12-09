
"use client";
import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function BombayAbout({ data }) {
  if (!data) return null;

  // ✅ Dynamic Fields
  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

  const title =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) || "";

  const description =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
    "Bombay Choc N Nuts delivers a premium snacking experience...";

  const image =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
    ""; 

  return (
     <section className="w-full py20 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-1 items-center gap-10 px5">

        <div className="flex flex-col justify-center md:w-full">
          <h2 className="text-4xl"    
          dangerouslySetInnerHTML={{ __html: heading }}/>
          <p className="mt-4  leading-relaxed w-[700px]">
             {description}
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={
              image.startsWith("http") || image.startsWith("/")
                ? image
                : `${Image_URL}/${image}`
            }
            alt="About Section Image"
            className="w-full max-w-md h-auto"
          />
        </div>

      </div>
    </section>
  );
}
