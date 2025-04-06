import Image from "next/image";
import { formatPrice } from "@/utils";
import type { SuggestionItem } from "@/types/SearchBar";

const SuggestionItem = ({ item }: SuggestionItem) => {
  return (
    <div key={item.id} className="grid grid-cols-[100px_auto] gap-4 dark:bg-zinc-800 dark:rounded-lg">
      <Image
        src={item.thumbnail}
        alt={item.title}
        width={100}
        height={100}
        className="rounded-md"
      />
      <div className="flex flex-col gap-2 justify-center">
        <h3 className="text-lg font-bold uppercase">{item.title}</h3>
        <p className="text-md text-gray-500">{formatPrice(item.price)}</p>
      </div>
    </div>
  );
};

export default SuggestionItem;
