import usePerson from "@/hooks/usePerson";

type PersonDetailsProps = {
  id: string;
};
export default function PersonDetails({ id }: PersonDetailsProps) {
  const { data: person, isLoading, isError } = usePerson(id);
  if (isLoading) return <div>Loading...</div>;
  if (isError || !person) return <div>Error: Failed to fetch user</div>;
  return (
    <div className="max-w-xs w-full text-center rounded-lg shadow-lg shadow-gray-700 pb-8 overflow-hidden">
      <div>
        <img
          src={person.backgroundImageUrl}
          className="w-full h-28 object-cover"
        />
      </div>
      <img
        src={person.profilePictureUrl}
        className="w-24 rounded-full aspect-square object-cover mx-auto -mt-12 border relative z-10"
      />
      <div className="mt-5">
        <div>{person.name}</div>
        <div className="text-xs opacity-70">{person.title}</div>
      </div>
      <div className="flex gap-12 justify-center items-center mt-10">
        <div>
          <div className="text-xl font-light">{person.followers}</div>
          <div className="text-xs font-semibold opacity-60">Followers</div>
        </div>
        <div>
          <div className="text-lg font-light">{person.followers}</div>
          <div className="text-xs font-semibold opacity-60">Followers</div>
        </div>
      </div>
    </div>
  );
}
