import { useSelector } from "react-redux";

import React from "react";
import TodoItem from "./todo-item";

const TodoItems = () => {
	const todos = useSelector((state) => state.todos);
	return (
		<ul className="list-group list-group-flush">
			{todos.length > 0 ? (
				todos.map((item) => (
					<TodoItem
						key={item.id}
						title={item.title}
						id={item.id}
						isDone={item.isDone}
					/>
				))
			) : (
				<h3 className="text-center">Todos not created yet</h3>
			)}
		</ul>
	);
};

export default TodoItems;
