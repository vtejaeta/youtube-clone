import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <this.props.FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}
