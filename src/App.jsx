import "./App.css";
import TodosHeader from "./components/todos-header";
import TodosForm from "./components/todos-form";
import TodoItems from "./components/todo-items";
import TodosFooter from "./components/todos-footer";

function App() {
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
