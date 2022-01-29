import { observer } from "mobx-react";
import { useCallback, useEffect } from "react";
import RestDemoStore from "../../mobx/RestDemoStore";
import "./index.css";

const RestDemoPage = observer(() => {

	// call get random user at the start of the component (like a constructor)
	useEffect(() => {
		RestDemoStore.getRandomUser();
	}, []);

	const onClick = useCallback(() => {
		RestDemoStore.getRandomUser();
	}, []);

	return (
		<div className="rest-demo-container">
			rest in mobx example

			<input type="button" value="fetch" onClick={onClick} />

			fetch result:

			{
				RestDemoStore.isLoading
				? (
					<div> now loading... </div>
				)
				: (
					<div className="rest-demo-stringified-result">
						<pre>
							{JSON.stringify(RestDemoStore.user, null, 4)}
						</pre>
					</div>
				)
			}
			
		</div>
	);
});

export default RestDemoPage;
