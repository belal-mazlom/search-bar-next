import type { Suggestions } from "@/types/SearchBar";
import SuggestionItem from "./SuggestionItem";

const Suggestions = ({ items }: Suggestions) => {
  return (
    <div className="absolute top-[54px] md:top-[98px] left-0 w-full px-4 py-2 bg-background shadow-md">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <SuggestionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
