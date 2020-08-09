import React, { forwardRef, useState, useEffect } from "react";
import classNames from "classnames";
import { textInputProps } from "./util";
import $ from "jquery";

const Index = forwardRef(
  (
    {
      labelText,
      className,
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
      ...other
    },
    ref
  ) => {
    useEffect(() => {
      $(function() {
        $('[data-toggle="tooltip"]').tooltip();
      });
    }, []);
    const errorId = id + "-error-msg";
    const textInputClasses = classNames(
      `form-control rounded d-block w-100`,
      className,
      {
        [`border border-light1 bg-white`]: !invalid,
        [`bg-light border border-danger`]: invalid
      }
    );
    const sharedTextInputProps = {
      id,
      value,
      autoComplete,
      name,
      onChange: evt => {
        if (onChange) {
          onChange(evt.target.value);
        }
      },
      onClick: evt => {
        if (!other.disabled) {
          onClick(evt.target.value);
        }
      },
      onBlur: evt => {
        if (onBlur) {
          onBlur(evt.target.value);
        }
      },
      placeholder,
      type,
      ref,
      maxLength,
      className: inputStyles ? inputStyles : textInputClasses,
      ...other
    };
    const labelClasses = classNames(`text-sm font-weight-bold m-0`, {
      [`d-none`]: hideLabel
    });

    const label = labelText ? (
      <div>
        <label
          htmlFor={id}
          className={labelClasses}
          style={{ fontSize: ".7rem" }}
        >
          {labelText}
        </label>
        <span
          className="pl-2"
          data-toggle="tooltip"
          data-placement="top"
          title={other.tooltipText ? other.tooltipText : labelText}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            className="bi bi-info-circle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
            <circle cx="8" cy="4.5" r="1" />
          </svg>
        </span>
      </div>
    ) : null;

    const error = invalid ? (
      <div className={`text-danger text-sm mt-1`} id={errorId}>
        {invalidText}
      </div>
    ) : null;

    const input = (
      <input
        {...textInputProps({ invalid, sharedTextInputProps, errorId })}
        style={{ height: "8vh" }}
      />
    );

    return (
      <>
        {label}
        <div
          data-invalid={invalid || null}
          className="relative rounded mt-1 w-100"
        >
          {input}
        </div>
        {error}
      </>
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
