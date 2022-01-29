import { action, computed, makeObservable, observable } from "mobx";
import { User } from "../types/User";

const store = observable<{
    users: User[],
    updateUsers: (users: User[]) => void
}>({
    users: [],
    updateUsers: action((users: User[]) => {
        store.users = users;
    })
});

export default store;
