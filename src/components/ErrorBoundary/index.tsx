import { Component, type ErrorInfo, type ReactNode } from 'react';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.fallback}>
          Something went wrong. Please try refreshing the page.
        </div>
      );
    }

    return this.props.children;
  }
}
