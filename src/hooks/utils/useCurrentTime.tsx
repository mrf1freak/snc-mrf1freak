import { useState } from "react";
import { useInterval } from "usehooks-ts";

export default function useCurrentTime() {
  const [now, setNow] = useState(new Date());
  useInterval(() => setNow(new Date()), 1000);
  return now;
}
