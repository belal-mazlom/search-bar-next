import Image from "next/image";
import type { Suggestions } from "@/types/SearchBar";
import { formatPrice } from "@/utils";
const Suggestions = ({ items }: Suggestions) => {
  return (
    <div className="absolute top-[54px] md:top-[98px] left-0 w-full px-4 py-2 bg-background shadow-md">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="grid grid-cols-[100px_auto] gap-4">
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
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
