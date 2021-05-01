import React from "react";
import "./Skeleton.scss";

export default function SkeletonElement({ type }) {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
}
