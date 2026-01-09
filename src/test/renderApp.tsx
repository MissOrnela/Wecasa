import { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import bookingReducer from "@/store/bookingSlice";
import { PrestationsPage } from "@/pages/PrestationsPage";
import { AddressPage } from "@/pages/AddressPage";
import { AppointmentPage } from "@/pages/AppointmentPage";
import { ConfirmationPage } from "@/pages/ConfirmationPage";
import { ROUTES } from "@/app/routes";

export function makeStore() {
  return configureStore({
    reducer: { booking: bookingReducer },
  });
}

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: 0,
        gcTime: 0,
      },
      mutations: { retry: false },
    },
  });
}

export function makeRouter(initialPath: string) {
  const routes = [
    { path: ROUTES.prestations, element: <PrestationsPage /> },
    { path: ROUTES.address, element: <AddressPage /> },
    { path: ROUTES.appointment, element: <AppointmentPage /> },
    { path: ROUTES.confirmation, element: <ConfirmationPage /> },
  ];

  return createMemoryRouter(routes, { initialEntries: [initialPath] });
}

export function renderBookingFlow(initialPath = ROUTES.prestations) {
  const store = makeStore();
  const queryClient = makeQueryClient();
  const router = makeRouter(initialPath);

  function AppProviders({ children }: PropsWithChildren) {
    return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    );
  }

  render(
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );

  return { store, queryClient, router };
}
