import useCurrentTime from "@/hooks/utils/useCurrentTime";
import dayjs from "dayjs";

export default function Clock() {
  const now = useCurrentTime();
  return (
    <div className="fixed top-4 right-4" suppressHydrationWarning>
      {dayjs(now).format("DD-MM-YYYY : hh:mm:ss")}
    </div>
  );
}
