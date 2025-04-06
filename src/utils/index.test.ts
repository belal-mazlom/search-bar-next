import { classNames, debounce, formatPrice } from "./index";

describe("classNames", () => {
  it("should return a string of classes", () => {
    expect(classNames("test", "test2")).toBe("test test2");
  });

  it("should return a string of classes without null or undefined values", () => {
    expect(classNames("test", undefined, null, "test3")).toBe("test test3");
  });

  it("should return a string of classes with conditional classes true", () => {
    expect(classNames("test", "test2", { "test3": true }, { "test4": false })).toBe("test test2 test3");
  });
});

describe("formatPrice", () => {
  it("should return a formatted price with 2 decimal places", () => {
    expect(formatPrice(100.123)).toBe("$100.12");
  });
});

describe("debounce", () => {
  it("should debounce a function", async () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 100);
    
    // Call the debounced function
    debouncedFn();
    
    // Wait for the debounce delay to complete
    await new Promise(resolve => setTimeout(resolve, 150));
    
    // Now check if the function was called
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should only call the function once when called multiple times within the debounce period", async () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 100);
    
    // Call the debounced function multiple times
    debouncedFn();
    debouncedFn();
    debouncedFn();
    
    // Wait for the debounce delay to complete
    await new Promise(resolve => setTimeout(resolve, 150));
    
    // Should only be called once
    expect(fn).toHaveBeenCalledTimes(1);
  });
});