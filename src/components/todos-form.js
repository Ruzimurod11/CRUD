import { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../actions/todos";

const TodosForm = () => {
	const dispatch = useDispatch();
	const inputRef = useRef(null);
	const formRef = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addTodo({
				title: inputRef.current.value,
				id: uuidv4(),
				isDone: false,
			}),
		);
		formRef.current.reset();
	};
	return (
		<div className="card-body">
			<form
				onSubmit={handleSubmit}
				ref={formRef}
				className="mb-3 d-flex justify-content-between align-items-center"
			>
				<div className="flex-grow-1 me-2">
					<input
						type="text"
						ref={inputRef}
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="Some todo"
					/>
				</div>
				<button className="btn btn-success">Add</button>
			</form>
		</div>
	);
};

export default TodosForm;
