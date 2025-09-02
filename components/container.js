import React from "react";
import clsx from "clsx";

export default function Container(props) {
  return (
    <div
      className={clsx(
        "container p-8 mx-auto xl:px-0",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}