import { Component, ReactNode } from "react";

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  State
> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <div>Une erreur est survenue</div>;
    }

    return this.props.children;
  }
}
