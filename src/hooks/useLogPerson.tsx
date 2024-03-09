import { User } from "@/utils/common/person";
import useCurrentTime from "./useCurrentTime";
import { useLogs } from "@/contexts/useLogs";
import { useEffect, useState } from "react";
import { isEqual } from "lodash";

export default function useLogPerson(person?: User) {
  const now = useCurrentTime();
  const { enableLogs } = useLogs();
  const [currentPerson, setCurrentPerson] = useState(person);

  useEffect(() => {
    if (enableLogs && person && !isEqual(currentPerson, person)) {
      console.log(person, now);
    }
    setCurrentPerson(person);
  }, [person, enableLogs, now, currentPerson]);
}
