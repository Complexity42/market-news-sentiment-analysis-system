import axios, { AxiosError, AxiosResponse } from "axios";
import { action, flow, observable } from "mobx";

const store = observable({
	user: null,
	isLoading: false,
	isError: false,
	errorCode: "",
	errorMessage: "",
	getRandomUser: flow(function*() {
		store.isLoading = true;
		try {
			const result: AxiosResponse = yield axios.get(`https://random-data-api.com/api/users/random_user`);

			store.isLoading = false;
			store.isError = false;
			store.user = result.data;
		} catch (e) {
			store.isLoading = false;
			store.isError = true;
			if (axios.isAxiosError(e)) {
				store.errorCode = e.code || "400";
				store.errorMessage = e.message;
			}
		}
	}),
});

export default store;