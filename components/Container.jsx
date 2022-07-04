import clx from "classnames";

export function Container({ children, size = "xl", className = "" }) {
  return (
    <div
      className={clx(
        "m-auto",
        {
          "w-9/12": size === "xl",
          "w-11/12": size === "2xl",
          "w-full": size === "full",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
