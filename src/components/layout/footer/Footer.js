import React from "react";

import "./footer.styles.scss";

export default function Footer() {
  return (
    <footer className="footer-ctn">
      <p>
        Web illustrations by{" "}
        <a href="https://storyset.com/web" className="storyset-link">
          {" "}
          Storyset
        </a>
      </p>
      <p className="author-txt">
        Made with{" "}
        <span role="img" aria-label="Love feeling">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href="https://github.com/vtejaeta"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          vtejaeta
        </a>
      </p>
    </footer>
  );
}
