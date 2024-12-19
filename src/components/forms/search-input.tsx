import { useEffect, useRef } from "react";
import InputField, { InputProps } from "./input";
import SearchIcon from "assets/icons/search-icon";

function SearchInput(props: InputProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
				event.preventDefault(); // Prevent default browser behavior
				inputRef.current?.focus(); // Focus on the input
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<InputField
			{...props}
			containerClass="!mb-0 w-full"
			preffix={<SearchIcon />}
			ref={inputRef} // Attach the ref to the input
			placeholder={props.placeholder || "Search"}
		/>
	);
}

export default SearchInput;
