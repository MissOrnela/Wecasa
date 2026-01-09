import { describe, it, expect } from "vitest";
import { formatDuration, formatEuroFromCents } from "@/shared/utils";

describe("formatEuroFromCents", () => {
  it("formats cents to euro in fr-FR", () => {
    expect(formatEuroFromCents(5390)).toContain("53");
  });
});

describe("formatDuration", () => {
  it("formats minutes under 60", () => {
    expect(formatDuration(45)).toBe("45min");
  });

  it("formats exact hours", () => {
    expect(formatDuration(60)).toBe("1h");
  });

  it("formats hours + minutes", () => {
    expect(formatDuration(90)).toBe("1h30");
  });
});
