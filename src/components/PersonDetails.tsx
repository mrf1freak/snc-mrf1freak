import usePerson from "@/hooks/usePerson";

type PersonDetailsProps = {
  id: string;
};
export default function PersonDetails({ id }: PersonDetailsProps) {
  const { data: person, isLoading, isError } = usePerson(id);
  if (isLoading) return <div>Loading...</div>;
  if (isError || !person) return <div>Error: Failed to fetch user</div>;
  return <div>Name: {person.name}</div>;
}
