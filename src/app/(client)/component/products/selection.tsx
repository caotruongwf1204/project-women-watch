"use client";

import "@/app/css/selection.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
export default function Selection() {
  const [optionValue, setOptionValue] = useState("default");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSortChange = (e: any) => {
    const selectedValue = e.target.value;
    setOptionValue(selectedValue);

    const queryString = createQueryString("sort", selectedValue);
    router.push(`${pathname}?${queryString}`);
  };

  return (
    <select value={optionValue} onChange={handleSortChange}>
      <option value="">Mặc định</option>
      <option value="asc">Giá - Thấp tới cao</option>
      <option value="desc">Giá - Cao tới thấp</option>
    </select>
  );
}
