"use client";
import { useState } from "react";
import allUsers from "../../../data/constants/users";
import User from "@/data/model/User";
import UserList from "./UserList";
import Forms from "./Forms";
import { IconUsersPlus } from "@tabler/icons-react";
import Id from "@/data/model/Id";

export default function UserRegister() {
  const [userSelected, setUserSelected] = useState<Partial<User> | null>(null);
  const [users, setUsers] = useState<User[]>(allUsers);

  function removeUser(user: User) {
    const newUsers = users.filter((u) => u.id !== user.id);

    setUsers(newUsers);
  }

  function editUser(user: Partial<User>) {
    setUserSelected(user);
  }

  function cancel() {
    setUserSelected(null);
  }

  function saveUser() {
    const presentUser = users.find((u) => u.id === userSelected?.id);

    if (presentUser) {
      const newUser = users.map((u) => {
        return u.id === userSelected?.id ? userSelected : u;
      });

      setUsers(newUser as User[]);
    } else {
      setUsers([...users, userSelected as User]);
    }

    setUserSelected(null);
  }

  return (
    <div className="flex flex-col gap-5">
      <button
        className="button bg-sky-500 hover:bg-sky-300 self-end"
        onClick={() => editUser({ id: Id.new() })}
      >
        <IconUsersPlus stroke={1} /> Novo Usuário
      </button>

      {userSelected ? (
        <Forms
          user={userSelected}
          cancel={cancel}
          alterUser={setUserSelected}
          save={saveUser}
        />
      ) : (
        <UserList users={users} removeUser={removeUser} editUser={editUser} />
      )}
    </div>
  );
}
