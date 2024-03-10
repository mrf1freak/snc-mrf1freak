import { FunctionComponent, PropsWithChildren, useState } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";
import PersonDetails from "@/components/PersonDetails";
import Clock from "@/components/Clock";
import { UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const [selectedPerson, setSelectedPerson] = useState<string>();
  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center"
      )}
    >
      <div className={classNames("flex gap-2 mb-10")}>
        {Object.values(Person).map((person) => (
          <Button
            className={classNames(
              person == selectedPerson && "bg-gray-700 rounded-lg"
            )}
            onClick={() => setSelectedPerson(person)}
            key={person}
          >
            {person}
          </Button>
        ))}
        <button />
      </div>
      {selectedPerson && <PersonDetails id={selectedPerson} />}
      <Clock />
      <div className="absolute top-4 left-4">
        <UserButton />
      </div>
    </main>
  );
};
