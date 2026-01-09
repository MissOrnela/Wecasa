import { screen } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { expect } from "vitest";
import { ROUTES } from "@/app/routes";

export async function choosePrestation(user = userEvent.setup()) {
  expect(
    await screen.findByText(/Choisissez vos prestations/i)
  ).toBeInTheDocument();

  const addButtons = await screen.findAllByRole("button", { name: /ajouter/i });
  await user.click(addButtons[0]);

  const next = screen.getByRole("button", { name: /suivant/i });
  expect(next).toBeEnabled();

  await user.click(next);
  return user;
}

export async function fillAddress(address: string, user: UserEvent) {
  const input =
    screen.queryByLabelText(/adresse/i) ??
    screen.getByPlaceholderText(/adresse/i);
  await user.clear(input as HTMLInputElement);
  await user.type(input as HTMLInputElement, address);
  const next = screen.getByRole("button", { name: /suivant/i });
  expect(next).toBeEnabled();
  await user.click(next);
  return user;
}

export async function pickAppointment(datetimeLocal: string, user: UserEvent) {
  const dt = document.querySelector(
    'input[type="datetime-local"]'
  ) as HTMLInputElement;
  expect(dt).toBeTruthy();
  await user.clear(dt);
  await user.type(dt, datetimeLocal);
  const confirm = screen.getByRole("button", { name: /confirmer/i });
  expect(confirm).toBeEnabled();
  await user.click(confirm);
  expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
  return user;
}

export async function confirm() {
  expect(
    await screen.findByText(/votre reservation est confirmée/i)
  ).toBeInTheDocument();
}

export async function clearBookingFlow(user: UserEvent) {
  const resetBtn = screen.getByRole("button", {
    name: /commencez une nouvelle reservation/i,
  });
  await user.click(resetBtn);

  expect(
    await screen.findByText(/Choisissez vos prestations/i)
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /suivant/i })).toBeDisabled();

  return user;
}

export const PATH = {
  prestations: ROUTES.prestations,
  address: ROUTES.address,
  appointment: ROUTES.appointment,
  confirmation: ROUTES.confirmation,
} as const;
