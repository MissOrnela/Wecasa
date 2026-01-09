import { describe, it, expect, vi, beforeEach } from "vitest";

import { renderBookingFlow } from "./renderApp";
import {
  choosePrestation,
  fillAddress,
  pickAppointment,
  confirm,
  clearBookingFlow,
  PATH,
} from "./booking-flow-helpers";
import userEvent from "@testing-library/user-event";

// on mock juste l'api

vi.mock("@/api/prestation", () => ({
  fetchPrestations: vi.fn(async () => ({
    categories: [
      {
        reference: "woman",
        title: "Femme",
        prestations: [
          {
            reference: "brushing",
            title: "Brushing",
            price: 1000,
            duration: 30,
          },
          { reference: "cut", title: "Coupe", price: 1500, duration: 45 },
        ],
      },
    ],
  })),
}));

vi.mock("@/api/booking", () => ({
  createBooking: vi.fn(async () => ({ status: "success" })),
}));
describe("Booking flow (full integration)", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("Realize entire process : prestation-address-appointment-confirmation", async () => {
    const { router } = renderBookingFlow(PATH.prestations);
    const user = userEvent.setup();

    await choosePrestation(user);
    expect(router.state.location.pathname).toBe(PATH.address);

    await fillAddress("sartrouvile", user);
    expect(router.state.location.pathname).toBe(PATH.appointment);

    await pickAppointment("2026-01-29T12:30", user);
    expect(router.state.location.pathname).toBe(PATH.confirmation);

    await confirm();

    await clearBookingFlow(user);
    expect(router.state.location.pathname).toBe(PATH.prestations);
  });
});
