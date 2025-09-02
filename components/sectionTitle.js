import React from "react";
import Container from "./container";
import clsx from "clsx";

function SectionTitle(props) {
  const containerClasses = clsx(
    "flex w-full flex-col mt-4",
    { "items-center justify-center text-center": props.align !== "left" },
    props.className
  );

  return (
    <Container className={containerClasses}>
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}

export default React.memo(SectionTitle);