import { Dot } from "./dot";

const message = `Getting ready for the West Coast Trail`;

export function Status() {
  return (
    <div className="font-title flex items-center gap-2">
      <Dot className="bg-yellow-500 shadow-yellow-500 animate-pulse shadow-dot" />
      <p className="-mt-0.5">{message}</p>
    </div>
  );
}