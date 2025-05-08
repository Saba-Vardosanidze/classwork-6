import type { UserCardProps } from "../types";
const UserCard = ({ name, age, active }: UserCardProps) => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="text-gray-500">Age: {age}</p>
      <p className={active ? "text-green-600" : "text-red-600"}>
        {active ? "Active" : "Inactive"}
      </p>
    </div>
  );
};

export default UserCard;
