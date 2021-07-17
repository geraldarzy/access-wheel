import React from "react";
import { useForm } from "react-hook-form";


const AddLocation = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="Location Name"
				{...register("Location Name", { required: true, maxLength: 80 })}
			/>
			<input
				type="text"
				placeholder="Zip Code"
				{...register("Zip Code", { required: true, maxLength: 100 })}
			/>
			<input
				type="text"
				placeholder="Type of Location"
				{...register("Type of Location", {
					required: true,
					pattern: /^\S+@\S+$/i,
				})}
			/>
			<input
				type="text"
				placeholder="Accessible or Inaccessible "
				{...register("Accessible or Inaccessible ", {
					required: true,
					maxLength: 1000,
				})}
			/>
			<input
				type="text"
				placeholder="Proof"
				{...register("Proof", { required: true })}
			/>

			<input type="submit" />
		</form>
	);
}

export default AddLocation
