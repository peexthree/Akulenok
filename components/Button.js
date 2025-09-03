import Link from "next/link";
import clsx from "clsx";

export default function Button({ href, className, children, ...props }) {
  const baseClass =
   "inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-semibold transition-transform transition-colors transition-shadow duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-aqua-accent";
  const classes = clsx(baseClass, className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}