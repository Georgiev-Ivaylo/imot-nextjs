"use client";

// import { useDebounce } from "@/app/estates/routes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function useDebounce(cb, delay) {
  const [debounceValue, setDebounceValue] = useState(cb);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(cb);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [cb, delay]);
  return debounceValue;
}

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [query, setQuery] = useState(searchParams.get("query")?.toString());
  const debouncedQuery = useDebounce(query, 2000);

  // function handleSearch(term) {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("page", "1");
  //   if (term) {
  //     params.set("query", term);
  //   } else {
  //     params.delete("query");
  //   }
  // }

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (debouncedQuery) {
      params.set("query", debouncedQuery);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [debouncedQuery]);

  const handleOrder = (event) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (event.target.value) {
      params.set("order_by", event.target.value);
    } else {
      params.delete("order_by");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="search-grid">
      <input
        className="search-quick"
        placeholder={placeholder}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <select
        value={searchParams.get("order_by")?.toString()}
        onChange={handleOrder}
        className="search-select"
      >
        <option value="price">Lowest price</option>
        <option value="-price">Highest price</option>
        <option value="created_at">Oldest offers</option>
        <option value="-created_at">Latest offers</option>
      </select>
    </div>
  );
}
