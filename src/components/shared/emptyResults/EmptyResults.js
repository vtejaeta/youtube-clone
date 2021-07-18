import React from "react";

import Empty_Pana from "../../../assets/Empty-pana.svg";

import "./emptyResults.styles.scss";

export default function EmptyResults() {
  return (
    <section className="empty-results-cont">
      <img
        src={Empty_Pana}
        alt="Empty results"
        className="empty-results-logo"
      />
      <strong className="empty-results">No results found</strong>
    </section>
  );
}
