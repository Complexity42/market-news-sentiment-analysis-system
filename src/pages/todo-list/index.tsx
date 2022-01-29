import "./index.css";
import { addDoc, updateDoc, deleteDoc, collection, doc, getFirestore, query } from "firebase/firestore";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useCollectionData } from 'react-firebase-hooks/firestore';

interface ITodoItem {
	id: string;
	title: string;
	content: string;
	created_at: Date;
	updated_at: Date;
}

interface ITodoItemProps {
	data: ITodoItem;
}

const TodoItem = (props: ITodoItemProps) => {

	const firestore = useMemo(() => getFirestore(), []);

	const [isEditing, setEditing] = useState(false);
	const [title, setTitle] = useState(props.data.title);
	const [content, setContent] = useState(props.data.content);

	const onDeleteButtonClicked = useCallback(() => {
		deleteDoc(doc(firestore, "todos", props.data.id));
	}, [props.data.id]);

	return (
		<div key={props.data.id} className={`todo-item ` + (isEditing ? "edit-mode" : "normal-mode")}>
			<div className="todo-item-normal-mode">
				<h2>{props.data.title}</h2>
				<hr />
				<p>{props.data.content}</p>
			</div>

			<div className="todo-item-edit-mode">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setEditing(false);
						updateDoc(doc(firestore, "todos", props.data.id), {
							title,
							content
						});

					}}
					onReset={(e) => {
						e.preventDefault();
						setTitle(props.data.title);
						setContent(props.data.content);
					}}
				>
					<input type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value || "")} />
					<hr />
					<textarea value={content} onChange={(e) => setContent(e.currentTarget.value || "")} />
					<div>
						<input type="submit" value="apply changes" />
						<input type="reset" value="reset to default" />
					</div>
				</form>
			</div>

			<input type="button" value={isEditing ? "cancel" : "edit"} onClick={() => setEditing(!isEditing)} />

			<input type="button" value="delete" onClick={onDeleteButtonClicked} />
		</div>
	);
}

const TodoListPage = () => {

	const firestore = useMemo(() => getFirestore(), []);
	const collectionRef = useMemo(() => collection(firestore, 'todos'), []);
	const [todos, loading, error] = useCollectionData(query(collectionRef), {idField: 'id'});

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const onTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value);
	}, []);

	const onContentChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.currentTarget.value);
	}, []);

	const onAddItemButtonClick = useCallback(() => {
		addDoc(collectionRef, {
			title,
			content,
		});
	}, [title, content]);

	return (
		<div className="todo-list-container">
			<div className="todo-input">
				<div className="textfield">
					<div> title </div>
					<input type="text" onChange={onTitleChange} />
				</div>

				<div className="textfield">
					<div> content </div>
					<textarea onChange={onContentChange} />
				</div>

				<input
					type="button"
					value="add item"
					onClick={onAddItemButtonClick}
				/>
			</div>

			{
				loading ? (
					<div>
						loading...
					</div>
				) : todos && todos.map(e => e as any as ITodoItem).map((e) => (
					<TodoItem key={e.id} data={e} />
				))
			}
		</div>
	);
}

export default TodoListPage;
