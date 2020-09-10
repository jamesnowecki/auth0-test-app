import React from "react";
import { render } from "@testing-library/react";
import LogoutButton from "./LogoutButton";

describe("LogoutButton tests", () => {
  it("should render", () => {
    expect(render(<LogoutButton />)).toBeTruthy();
  });
});
