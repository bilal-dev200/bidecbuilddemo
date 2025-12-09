

"use client";
import React, { useState } from "react";
import {
  getRobustFieldValuesByName,
  COMMON_FIELD_NAMES,
  isValidSectionData,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";

export default function AppCostSection({ data }) {
  if (!isValidSectionData(data)) return null;

  // Headings and description
  const heading =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.HEADING)[0]?.value ||
    "Estimated Mobile";
  const description =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.DESCRIPTION)[0]?.value ||
    "";

  // Columns
  const columnHeaders =
    getRobustFieldValuesByName(data, "Column").map((c) => c.value) || [];
  const columnHeaders2 =
    getRobustFieldValuesByName(data, "Column1").map((c) => c.value) || [];
  const columnHeaders3 =
    getRobustFieldValuesByName(data, "Column2").map((c) => c.value) || [];
  // Buttons
  const btn1 = getValueByFieldNameAndPosition(
    data,
    COMMON_FIELD_NAMES.BUTTON_TEXT,
    0
  );
  const btn2 = getValueByFieldNameAndPosition(
    data,
    COMMON_FIELD_NAMES.BUTTON_TEXT,
    1
  );
  const btn3 = getValueByFieldNameAndPosition(
    data,
    COMMON_FIELD_NAMES.BUTTON_TEXT,
    2
  );


  // Boolean value for row limit
  const tabvalues = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.BOOLEANVALUE, 0
  );
  const tabvalues2 = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.BOOLEANVALUE, 1
  );
  const rowLimit = parseInt(tabvalues[0]?.value || 0);

  // Rows data
  const rowFieldNames = [
    "Row1", "Row2", "Row3", "Row4", "Row5", "Row6",
    "Row7", "Row8", "Row9", "Row10", "Row11", "Row12",
  ];

  const rows = rowFieldNames.map((rowName) => {
    const rowValues = getRobustFieldValuesByName(data, rowName);
    const columns = rowValues.map((v) => v.value || "");
    return columns;
  });


  const booleanValues = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.BOOLEANVALUE);

  const limit1 = parseInt(booleanValues[0]?.value || 0);
  const limit2 = parseInt(booleanValues[1]?.value || 0);

  // TAB 1 → LIMIT 1
  const firstTabRows = rows.slice(0, limit1);

  // TAB 2 → NEXT LIMIT 2
  const secondTabRows = rows.slice(limit1, limit1 + limit2);

  // TAB 3 → REMAINING ROWS
  const thirdTabRows = rows.slice(limit1 + limit2);

  const [activeTab, setActiveTab] = useState("tab1");

  // Determine what to show
  const totalButtons = [btn1, btn2, btn3].filter(Boolean).length;

  const activeColumns =
    activeTab === "tab1"
      ? columnHeaders
      : activeTab === "tab2"
        ? columnHeaders2
        : columnHeaders3;


  const activeRows =
    activeTab === "tab1"
      ? firstTabRows
      : activeTab === "tab2"
        ? secondTabRows
        : thirdTabRows;

  return (
    <div className="px-5 max-w-[1200px] mx-auto">
      <section className="bg-[url('/back1.png')] bg-cover  rounded-[20px] bg-center text-white py-16 px-4">
        <div className="mt-16">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2
              className="text-3xl md:text-6xl mb-2"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <p className="mt-4 text-sm md:text-[14px]">{description}</p>


            {totalButtons > 0 && (
              <div className="mt-6 flex justify-center gap-4">

                {btn1 && (
                  <button onClick={() => setActiveTab("tab1")}
                    className={`px-6 py-2 rounded-full transition duration-300 ${activeTab === "tab1"
                        ? "bg-[#95BF47] text-white"
                        : "border border-white text-white hover:bg-[#95BF47]"
                      }`}>
                    {btn1}
                  </button>
                )}

                {btn2 && (
                  <button onClick={() => setActiveTab("tab2")}
                    className={`px-6 py-2 rounded-full transition duration-300 ${activeTab === "tab2"
                        ? "bg-[#95BF47] text-white"
                        : "border border-white text-white hover:bg-[#95BF47]"
                      }`}>
                    {btn2}
                  </button>
                )}

                {btn3 && (
                  <button onClick={() => setActiveTab("tab3")}
                    className={`px-6 py-2 rounded-full transition duration-300 ${activeTab === "tab3"
                        ? "bg-[#95BF47] text-white"
                        : "border border-white text-white hover:bg-[#95BF47]"
                      }`}>
                    {btn3}
                  </button>
                )}

              </div>
            )}

          </div>

          {/* ✅ Table */}
          <div className="max-w-6xl mx-auto rounded-[12px] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div
                className="grid text-center font-semibold"
                style={{
                  gridTemplateColumns: `repeat(${activeColumns.length}, minmax(0, 1fr))`,
                }}
              >
                {activeColumns.map((col, idx) => {
                  const [beforeBracket, afterBracket] = col.split("(");
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center bg-[#1A7D85] text-white py-3 px-4 text-sm md:text-base relative"
                    >
                      <span>
                        {beforeBracket.trim()}
                        {afterBracket && (
                          <>
                            <br />({afterBracket.trim()}
                          </>
                        )}
                      </span>
                      {idx < activeColumns.length - 1 && (
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/40"></span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Table Rows */}
              {/* <div>
                {Array.isArray(activeRows) && activeRows.length > 0 ? (
                  activeRows
                    .filter((cols) => cols.some((val) => val.trim() !== ""))
                    .map((cols, rowIdx) => (
                      <div
                        key={rowIdx}
                        className="grid bg-white text-black shadow-md rounded-[12px] mt-1"
                        style={{
                          gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))`,
                        }}
                      >
                        {cols.map((cell, colIdx) => (
                          <div
                            key={colIdx}
                            className={`py-5 px-4 text-sm md:text-base relative flex justify-center items-center text-center ${
                              colIdx < cols.length - 1
                                ? "border-r border-black/50"
                                : ""
                            }`}
                          >
                            {cell || "--"}
                          </div>
                        ))}
                      </div>
                    ))
                ) : (
                  <p className="text-center text-gray-500 py-4">
                    No data available
                  </p>
                )}
              </div> */}
              {/* ✅ Scrollable Table Rows */}
              {/* ✅ Scrollable Table Rows with Local Scrollbar Styling */}
              <div
                className="max-h-[400px] overflow-y-auto custom-scroll"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#ffffff rgba(255,255,255,0.1)",
                }}
              >
                <style jsx>{`
    .custom-scroll::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    .custom-scroll::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    .custom-scroll::-webkit-scrollbar-thumb {
      background-color: #95bf47;
      border-radius: 10px;
    }

    .custom-scroll::-webkit-scrollbar-thumb:hover {
      background-color: #7faf3a;
    }
  `}</style>

                {Array.isArray(activeRows) && activeRows.length > 0 ? (
                  activeRows
                    .filter((cols) => cols.some((val) => val.trim() !== ""))
                    .map((cols, rowIdx) => (
                      <div
                        key={rowIdx}
                        className="grid bg-white text-black shadow-md rounded-[12px] mt-1"
                        style={{
                          gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))`,
                        }}
                      >
                        {/* {cols.map((cell, colIdx) => (
                          <div
                            key={colIdx}
                            className={`py-5 px-4 text-sm md:text-base relative flex justify-center items-center text-center ${colIdx < cols.length - 1 ? "border-r border-black/50" : ""
                              }`}
                          >
                            {cell || "--"}
                          </div>
                        ))} */}
                        {/* {cols.map((cell, colIdx) => (
  <div
    key={colIdx}
    className={`py-5 px-4 text-sm md:text-base relative flex justify-center items-center text-center ${
      colIdx < cols.length - 1 ? "border-r border-black/50" : ""
    }`}
    dangerouslySetInnerHTML={{ __html: cell || "--" }}
  ></div>
))} */}{cols.map((cell, colIdx) => (
  <div
    key={colIdx}
    className={`py-5 px-4 text-sm md:text-base relative text-center whitespace-pre-line ${
      colIdx < cols.length - 1 ? "border-r border-black/50" : ""
    }`}
    dangerouslySetInnerHTML={{ __html: cell || "--" }}
  ></div>
))}


                      </div>
                    ))
                ) : (
                  <p className="text-center text-gray-500 py-4">No data available</p>
                )}
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
