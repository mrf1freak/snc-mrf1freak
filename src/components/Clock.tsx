import dayjs from "dayjs";
import { useState } from "react";
import { useInterval } from "usehooks-ts";

export default function Clock() {
  const [now, setNow] = useState(new Date());
  useInterval(() => setNow(new Date()), 1000);

  return (
    <div className="fixed top-4 right-4">
      {dayjs(now).format("DD-MM-YYYY : hh:mm:ss")}
    </div>
  );
}
