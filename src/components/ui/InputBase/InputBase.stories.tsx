//Global Imports
import React from "react";
import { storiesOf } from "@storybook/react";
//End Global Imports

//Local Imports
import InputBase from ".";
import { useForm } from "react-hook-form";
//End Local Imports

const wrapperStyle = "bg-white p-3 max-w-lg";

storiesOf("Components/Basic/InputBase", module).add("Default", () => {
  const { getValues } = useForm();

  return (
    <>
      <div className={wrapperStyle}>
        <InputBase
          className="mb-4"
          name="username"
          placeholder="Text goes here"
          value={getValues(`${name}`)}
        />

        <InputBase
          className="mb-5"
          name="username"
          disabled
          placeholder="This is disable Input field"
          value={getValues(`${name}`)}
        />

        <InputBase
          className="mb-5"
          name="username"
          fullWidth
          defaultValue="Default value"
          placeholder="Text goes here"
          value={getValues(`${name}`)}
        />
      </div>
    </>
  );
});

storiesOf("Components/Basic/InputBase", module).add("Label", () => {
  const { getValues } = useForm();

  return (
    <>
      <div className={wrapperStyle}>
        <InputBase
          className="mb-5"
          name="username"
          label="Label"
          placeholder="Text goes here"
          value={getValues(`${name}`)}
        />
      </div>
    </>
  );
});

storiesOf("Components/Basic/InputBase", module).add("Error", () => {
  const { getValues } = useForm();

  return (
    <>
      <div className={wrapperStyle}>
        <InputBase
          className="mb-5"
          name="username"
          placeholder="Text goes here"
          error={true}
          errorMessage="Error message goes here"
          value={getValues(`${name}`)}
        />
        <InputBase
          className="mb-5"
          name="username"
          label="Label"
          placeholder="Text goes here"
          error={true}
          errorMessage="Error message goes here"
          value={getValues(`${name}`)}
        />
      </div>
    </>
  );
});

storiesOf("Components/Basic/InputBase", module).add("Search Input", () => {
  const { getValues } = useForm();

  return (
    <>
      <div className={wrapperStyle}>
        <InputBase
          className="mb-5"
          name="username"
          isSearch={true}
          placeholder="Search your order...."
          value={getValues(`${name}`)}
        />
      </div>
    </>
  );
});
