"use client";

// import useEasyForm from "hook-easy-form";
import useEasyForm from "../../lib";

interface Invoice {
  email: string;
  password: string;
}

function AuthFormExample() {
  const { submitEvent, getProps, valid, pristine, formObject } =
    useEasyForm<Invoice>({
      initialForm: [
        {
          name: "email",
          value: "",
          options: { type: "email", placeholder: "Enter your email address" },
        },
        {
          name: "password",
          value: "",
          options: { type: "password", placeholder: "Enter your password" },
        },
      ],
    });

  const { password, email } = formObject;

  return (
    <form
      onSubmit={submitEvent((d) => {
        console.log("d", d);
      })}
      className="space-y-4"
    >
      <input {...getProps("email", email.options, true)} />

      <input {...getProps("password", password.options, true)} />

      <button type="submit" disabled={!valid || pristine} className="btn">
        submit
      </button>
    </form>
  );
}

export default AuthFormExample;
