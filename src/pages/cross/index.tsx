import "./index.css";
import { observer } from "mobx-react";
import CounterStore from "../../mobx/CounterStore"

const ChildComponent1 = observer(() => {
	return (
		<div>
			<h2>
				Counter
				<h1>
					{CounterStore.count}
				</h1>
			</h2>
		</div>
	);
});

const ChildComponent2 = () => {
	return (
		<input type="button" value="add counter" onClick={CounterStore.addCounter} />
	);
};

const CrossPage = () => {
	return (
		<div className="cross-container">
			simple example: increase the count via mobx.

			<ChildComponent1 />

			<ChildComponent2 />
		</div>
	);
};

export default CrossPage;