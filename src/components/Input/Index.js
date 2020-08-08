import React, { forwardRef, useState } from "react";
import classNames from "classnames";
import { textInputProps } from "./util";

const Index = forwardRef(
  (
    {
      labelText,
      className = `text-black-4`,
      id,
      placeholder,
      type,
      onChange,
      onClick,
      onBlur,
      hideLabel,
      invalid,
      invalidText,
      invalidEmail,
      helperText,
      feedbackMessage,
      emailExist,
      inputStyles,
      maxLength,
      name,
      value,
      autoComplete,
      showCount,
      ...other
    },
    ref
  ) => {
    const [inputCount, setInputCount] = useState(0);

    const errorId = id + "-error-msg";
    const textInputClasses = classNames(
      `form-input rounded block w-full h-12`,
      className,
      {
        [`border-1 border-black-4 bg-white-100`]: !invalid,
        [`bg-error-light border-1 border-error`]: invalid
      }
    );
    const sharedTextInputProps = {
      id,
      value,
      autoComplete,
      name,
      onChange: evt => {
        setInputCount(evt.target.value.length);

        if (onChange) {
          onChange(evt);
        }
      },
      onClick: evt => {
        if (!other.disabled) {
          onClick(evt);
        }
      },
      onBlur: evt => {
        if (onBlur) {
          onBlur(evt);
        }
      },
      placeholder,
      type,
      ref,
      maxLength,
      className: inputStyles ? inputStyles : textInputClasses,
      ...other
    };
    const labelClasses = classNames(`text-sm leading-6 font-medium`, {
      [`hidden`]: hideLabel
    });

    const label = labelText ? (
      <label htmlFor={id} className={labelClasses}>
        {labelText}
      </label>
    ) : null;

    const helpertext = helperText ? (
      <div className="text-sm leading-5 text-black-5 mt-1">{helperText}</div>
    ) : null;

    const error = invalid ? (
      <div className={`text-error text-sm leading-normal mt-1`} id={errorId}>
        {invalidText}
      </div>
    ) : null;

    const input = (
      <input {...textInputProps({ invalid, sharedTextInputProps, errorId })} />
    );

    return (
      <div>
        {label}
        {helpertext}
        <div
          data-invalid={invalid || null}
          className="relative rounded-md shadow-sm mt-1"
        >
          {input}
        </div>
        {error}
      </div>
    );
  }
);

Index.defaultProps = {
  disabled: false,
  type: "text",
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  invalidText: "",
  value: ""
};

export default Index;
