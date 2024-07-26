import "./App.css";
import TodosHeader from "./components/todos-header";
import TodosForm from "./components/todos-form";
import { initialazeTodos } from "./actions/todos";
import TodoItems from "./components/todo-items";
import TodosFooter from "./components/todos-footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos"));
		dispatch(initialazeTodos(todos));
	}, [dispatch]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card mt-5">
						<TodosHeader />
						<TodosForm />
						<TodoItems />
						<TodosFooter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
