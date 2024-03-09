import useCurrentTime from "@/hooks/useCurrentTime";
import dayjs from "dayjs";
import { useState } from "react";
import { useInterval } from "usehooks-ts";

export default function Clock() {
  const now = useCurrentTime();
  return (
    <div className="fixed top-4 right-4" suppressHydrationWarning>
      {dayjs(now).format("DD-MM-YYYY : hh:mm:ss")}
    </div>
  );
}
