"user client";
import User from "@/data/model/User";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export interface UserListProps {
  users: User[];
  removeUser: (user: User) => void;
  editUser: (user: User) => void;
}

export default function UserList(props: UserListProps) {
  function renderUser(user: User) {
    return (
      <div className="flex items-center px-6 py-3 rounded-md bg-zinc-900">
        <div className="flex-1 flex flex-col">
          <span className="font-semibold">{user.name}</span>
          <span className="text-sm text-zinc-400">{user.email}</span>
        </div>

        <div className="flex gap-2">
          <button
            className="button tertiary"
            onClick={() => props.editUser(user)}
          >
            <IconEdit stroke={1} />
          </button>
          <button
            className="button secondary"
            onClick={() => props.removeUser(user)}
          >
            <IconTrash stroke={1} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {props.users.map((user) => {
          return <li key={user.id}>{renderUser(user)}</li>;
        })}
      </ul>
    </div>
  );
}
