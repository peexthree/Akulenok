import React from "react";
import clsx from "clsx";

export default function Container(props) {
  return (
    <div
      className={clsx(
            "container p-4 mx-auto sm:p-8",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}