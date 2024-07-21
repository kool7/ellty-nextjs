"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

const ALL_PAGES = "All pages";
const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

export const Selection = () => {
  const [selectedPages, setSelectedPages] = useState<string[]>([
    ALL_PAGES,
    ...pages,
  ]);

  const handleCheckboxChange = (page: string) => {
    setSelectedPages((prev) => {
      if (page === ALL_PAGES) {
        return prev.includes(ALL_PAGES) ? [] : [ALL_PAGES, ...pages];
      }

      const isPageSelected = prev.includes(page);
      const withoutAllPages = prev.filter((p) => p !== ALL_PAGES);
      const withoutPage = withoutAllPages.filter((p) => p !== page);

      const newSelection = isPageSelected
        ? withoutPage
        : [...withoutPage, page];

      return newSelection.length > 0 ? [ALL_PAGES, ...newSelection] : [];
    });
  };

  const handleDone = () => {
    console.log(
      "Selected pages:",
      selectedPages.filter((page) => page !== ALL_PAGES)
    );
  };

  const CheckboxItem = ({ label }: { label: string }) => (
    <div className="flex items-center justify-between py-3">
      <label htmlFor={label} className="text-sm">
        {label}
      </label>
      <Checkbox
        id={label}
        checked={selectedPages.includes(label)}
        onChange={() => handleCheckboxChange(label)}
      />
    </div>
  );

  return (
    <div className="w-full max-w-sm border border-gray-300 rounded-lg shadow-sm overflow-hidden">
      <div className="px-5 py-3">
        <CheckboxItem label={ALL_PAGES} />
        <hr className="h-px my-2 bg-zinc-300" />
        <div className="flex flex-col py-2">
          {pages.map((page) => (
            <CheckboxItem key={page} label={page} />
          ))}
        </div>
        <hr className="h-px mt-1 mb-2 bg-zinc-300" />
        <div className="py-3">
          <Button
            onClick={handleDone}
            className="w-full h-12 rounded bg-yellow-400 hover:bg-amber-300 text-black"
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};
