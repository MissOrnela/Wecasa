import ErrorComponent from "@/components/ErrorComponent";
import Loading from "@/components/Loading";
import { Suspense } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import PrestationsContainer from "@/components/PrestationsContainer";

export function PrestationsPage() {
  return (
    <ErrorBoundary
      fallback={
        <ErrorComponent message="Erreur lors du changement des prestations" />
      }
    >
      <Suspense fallback={<Loading />}>
        <PrestationsContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
