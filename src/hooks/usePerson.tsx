import { getPerson } from "@/db/person";
import { useQuery } from "react-query";

export default function usePerson(id: string) {
  return useQuery({
    queryKey: ["person", id],
    queryFn: async () => getPerson(id),
  });
}
