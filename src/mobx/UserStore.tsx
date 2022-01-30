import { action, computed, makeObservable, observable } from "mobx";
import { User } from "../types/User";

const store = observable<{
    users: User[],
    updateUsers: (users: User[]) => void
}>({
    users: [],
    updateUsers: action((_users: User[]) => {
        store.users = _users;
    })
});

export default store;
