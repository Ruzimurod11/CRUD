import { removeTodo, markTodoDone } from "../actions/todos";
import { useDispatch } from "react-redux";

const TodoItem = ({ id, title, isDone }) => {
	const dispatch = useDispatch();

	const handleMarkTodo = (e) => {
		dispatch(
			markTodoDone({
				id,
				title,
				isDone: e.target.checked,
			}),
		);
	};

	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			<div>
				<input
					onChange={handleMarkTodo}
					className="form-check-input me-2"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label
					className={`form-check-label ${isDone ? "text-decoration-line-through" : ""}`}
					htmlFor="flexCheckDefault"
				>
					{title}
				</label>
			</div>
			<button
				onClick={() => dispatch(removeTodo(id))}
				className="btn btn-danger"
			>
				Remove
			</button>
		</li>
	);
};

export default TodoItem;
