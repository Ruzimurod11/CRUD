import React from "react";

const TodosForm = () => {
	return (
		<div className="card-body">
			<form className="mb-3 d-flex justify-content-between align-items-center">
				<div className="flex-grow-1 me-2">
					<input
						type="email"
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
