import { action, observable } from "mobx";

const store = observable<{
    filter: string,
    setFilter: (filter: string) => void
}>({
    filter: "",
    setFilter: action((filter: string) => {
        store.filter = filter;
    }),
});

export default store;
