import Image from "next/image";
import type { Suggestions } from "@/types/SearchBar";

const Suggestions = ({ items }: Suggestions) => {
  return (
    <div className="absolute top-4 left-0 w-full bg-white shadow-md grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.id} className="grid grid-cols-[1fr_auto] gap-4">
          <Image
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            className="w-10 h-10 rounded-md"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
