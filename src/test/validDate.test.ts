import { isValidDate } from "@/shared/utils";
import { describe, it, expect } from "vitest";

describe("is valid date appointment", () => {
  it("rejects before 07:00", () => {
    const d = "2026-01-10T06:00:00";
    expect(isValidDate(d)).toBe(false);
  });

  it("rejects after 22:00", () => {
    const d = "2026-01-10T23:00:00";
    expect(isValidDate(d)).toBe(false);
  });

  it("accepts future between 07 and 22", () => {
    const d = "2026-01-10T21:00:00";
    expect(isValidDate(d)).toBe(true);
  });
});
