import { describe, it, expect } from "vitest";
import { formatCurrency } from "./formatCurrency";

describe("formatCurrency", () => {
  it("formats USD correctly", () => {
    const result = formatCurrency(1234.56);
    expect(result).toBe("$1,234.56");
  });

  it("formats EUR correctly", () => {
    const result = formatCurrency(1234.56, "EUR");
    expect(result).toBe("€1,234.56");
  });

  it("formats currency with different locale", () => {
    const result = formatCurrency(1234.56, "EUR", "de-DE");
    expect(result).toBe("1.234,56 €");
  });

  it("handles zero value", () => {
    const result = formatCurrency(0);
    expect(result).toBe("$0.00");
  });

  it("handles negative value", () => {
    const result = formatCurrency(-1234.56);
    expect(result).toBe("-$1,234.56");
  });
});
