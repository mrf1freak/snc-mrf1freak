import usePerson from "@/hooks/person/usePerson";
import Skeleton from "./Skeleton";
import useLogPerson from "@/hooks/utils/useLogPerson";
import NextImage from "next/image";

type PersonDetailsProps = {
  id: string;
};
export default function PersonDetails({ id }: PersonDetailsProps) {
  const { data: person, isLoading, isError } = usePerson(id);
  useLogPerson(person);

  if (isLoading)
    return (
      <div className="max-w-xs w-full text-center rounded-lg pb-8 overflow-hidden bg-white/10">
        <Skeleton className="w-24 aspect-square rounded-full mt-12 mx-auto mb-6" />
        <Skeleton className="w-36 h-6 mx-auto mb-1" />
        <Skeleton className="w-24 h-4 mx-auto" />
        <div className="flex items-center justify-center gap-6 mt-10">
          <div className="space-y-2">
            <Skeleton className="w-24 h-8 mx-auto" />
            <Skeleton className="w-12 h-4 mx-auto" />
          </div>

          <div className="space-y-2">
            <Skeleton className="w-24 h-8 mx-auto" />
            <Skeleton className="w-12 h-4 mx-auto" />
          </div>
        </div>
      </div>
    );
  if (isError || !person)
    return (
      <div className="border border-red-500 bg-red-900 p-2 rounded-md">
        User not found :(
      </div>
    );
  return (
    <div className="max-w-xs w-full text-center rounded-lg shadow-lg shadow-gray-700 pb-8 overflow-hidden">
      <div className="relative h-28">
        <NextImage
          src={person.backgroundImageUrl}
          className="object-cover"
          alt={`${person.name}_background`}
          fill
        />
      </div>
      <div className="w-24 rounded-full aspect-square object-cover mx-auto -mt-12 border relative z-10 overflow-hidden">
        <NextImage
          src={person.profilePictureUrl}
          className="object-cover"
          alt={`${person.name}_profile_picture`}
          fill
        />
      </div>
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
          <div className="text-lg font-light">{person.following}</div>
          <div className="text-xs font-semibold opacity-60">Following</div>
        </div>
      </div>
    </div>
  );
}
