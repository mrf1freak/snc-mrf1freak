import { User } from "@/utils/common/person";
import useCurrentTime from "./useCurrentTime";
import { useLogs } from "@/contexts/useLogs";
import { useEffect, useRef, useState } from "react";
import { isEqual } from "lodash";

export default function useLogPerson(person?: User) {
  const now = useCurrentTime();
  const { enableLogs } = useLogs();
  const currentPerson = useRef<User>();

  useEffect(() => {
    if (enableLogs && person && !isEqual(currentPerson.current, person)) {
      console.log(person, now);
    }
    currentPerson.current = person;
  }, [person, enableLogs, now]);
}
