import { action, computed, makeObservable, observable } from "mobx";

const store = observable({
	count: 0,
	addCounter: action(function() {
		store.count += 1;
	}),
});

export default store;