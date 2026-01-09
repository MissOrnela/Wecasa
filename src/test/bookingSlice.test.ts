import { describe, it, expect } from "vitest";
import reducer, {
  addPrestation,
  removePrestation,
  setAddress,
  setAppointment,
  clearBooking,
} from "@/store/bookingSlice";

describe("bookingSlice", () => {
  it("adds items to basket (duplicates allowed)", () => {
    const s1 = reducer(
      undefined,
      addPrestation({
        reference: "shampoing",
        title: "Shampoing",
        price: 400,
        duration: 10,
      })
    );
    const s2 = reducer(
      s1,
      addPrestation({
        reference: "shampoing",
        title: "Shampoing",
        price: 400,
        duration: 10,
      })
    );

    expect(s2.basket).toHaveLength(2);
    expect(s2.basket[0].reference).toBe("shampoing");
    expect(s2.basket[1].reference).toBe("shampoing");
  });

  it("removes only one instance for a reference", () => {
    const s1 = reducer(
      undefined,
      addPrestation({
        reference: "shampoing",
        title: "Shampoing",
        price: 400,
        duration: 10,
      })
    );
    const s2 = reducer(
      s1,
      addPrestation({
        reference: "shampoing",
        title: "Shampoing",
        price: 400,
        duration: 10,
      })
    );
    const s3 = reducer(s2, removePrestation("shampoing"));

    expect(s3.basket).toHaveLength(1);
  });

  it("sets address and appointment", () => {
    const s1 = reducer(
      undefined,
      setAddress("401 avenue de l'europe , 78500 Sartrouville ")
    );
    const s2 = reducer(s1, setAppointment("2026-01-10T09:30"));

    expect(s2.address).toContain("Sartrouville");
    expect(s2.appointment).toContain("2026-01-10");
  });

  it("resetFlow clears everything", () => {
    const s1 = reducer(
      undefined,
      addPrestation({
        reference: "shampoing",
        title: "Shampoing",
        price: 400,
        duration: 10,
      })
    );
    const s2 = reducer(
      s1,
      setAddress("401 avenue de l'europe , 78500 Sartrouville ")
    );
    const s3 = reducer(s2, setAppointment("2026-01-10T09:30"));
    const s4 = reducer(s3, clearBooking());

    expect(s4.basket).toHaveLength(0);
    expect(s4.address).toBeNull();
    expect(s4.appointment).toBeNull();
  });
});
