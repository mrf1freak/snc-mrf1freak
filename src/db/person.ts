import { User } from "@/utils/common/person";

export async function getPerson(id: string): Promise<User> {
  const response = await fetch(`api/person?person=${id}`);
  return await response.json();
}
