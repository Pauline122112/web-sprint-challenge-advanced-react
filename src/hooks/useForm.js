import { useState } from "react";

//created a react localStorage to see information on console

const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		if (localStorage.getItem(key)) {
			return JSON.parse(localStorage.getItem(key));
		}
		localStorage.setItem(key, JSON.stringify(initialValue));
		return initialValue;
	});

	const setLocalStorageValue = (value) => {
		setValue(value);
		localStorage.setItem(key, JSON.stringify(value));
	};
	return [value, setLocalStorageValue];
};

//useForm custom hook that will initiate success message on checkout form
const useForm = (initValues) => {
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [values, setValues] = useLocalStorage("form", initValues);

	const handleChanges = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowSuccessMessage(true);
	};

	const clearForm = (e) => {
		e.preventDefault();
		setValues(initValues);
	};

	return [values, handleChanges, handleSubmit, clearForm, showSuccessMessage];
};

export default useForm;
