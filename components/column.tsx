import { ReactNode } from "react";

export function Column(props: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`flex h-full w-11/12 flex-col justify-start lg:w-[65ch] ${props.className}`}
    >
      {props.children}
    </div>
  );
}
