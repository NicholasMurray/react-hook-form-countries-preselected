import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

const countries = [
  { code: "US", description: "United States" },
  { code: "CA", description: "Canada" },
  { code: "MX", description: "Mexico" },
  { code: "GB", description: "United Kingdom" },
  { code: "FR", description: "France" },
  // Add more countries as needed
];

export default function Form() {
  // Set up react-hook-form with default values
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "CA", // Preselect Canada using its code
    },
  });

  const onSubmit = (data) => {
    console.log("Selected Country:", data.country);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="country">Select a Country:</label>
        <select id="country" {...register("country", { required: true })}>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.description}
            </option>
          ))}
        </select>
        {errors.country && <p>This field is required</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Form />, rootElement);
