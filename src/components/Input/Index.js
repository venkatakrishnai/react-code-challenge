import React, { forwardRef, useState, useEffect } from "react";
import classNames from "classnames";
import { textInputProps } from "./util";
import Label from "../Label/Index";

const Index = forwardRef(
  (
    {
      labelText,
      id,
      placeholder,
      type,
      onChange,
      onClick,
      onBlur,
      name,
      value,
      prefix,
      postfix,
      ...other
    },
    ref
  ) => {
    const textInputClasses = "";
    const sharedTextInputProps = {
      id,
      value,
      name,
      onChange: evt => {
        if (onChange) {
          onChange(evt.target.value);
        }
      },
      placeholder,
      type,
      ref,
      className: `rounded d-block ${
        postfix ? "w-75" : "w-100"
      } border-none bg-white`,
      ...other
    };

    const label = labelText ? <Label text={labelText} /> : null;

    const input = (
      <input
        {...sharedTextInputProps}
        style={{ outline: "none", border: "none" }}
      />
    );

    return (
      <>
        {label}
        <div
          className="relative rounded mt-1 w-100 d-flex border-light1"
          style={{
            border: "1px solid rgb(255, 0, 0)",
            borderRadius: "5px !important",
            padding: "5px",
            outline: "none"
          }}
        >
          {prefix && (
            <span className="prefix d-flex" style={{ alignItems: "center" }}>
              $
            </span>
          )}
          {input}
          {postfix && (
            <span
              className="prefix d-flex"
              style={{ alignItems: "center", fontSize: ".8rem" }}
            >
              {postfix}
            </span>
          )}
        </div>
      </>
    );
  }
);

Index.defaultProps = {
  disabled: false,
  type: "text",
  onChange: () => {},
  onClick: () => {},
  value: "",
  prefix: true
};

export default Index;
