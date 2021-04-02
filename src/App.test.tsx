// Library Components
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Enzyme Imports
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Source Components
import App from "./App";
import Home from "./pages/Home/Home";

configure({ adapter: new Adapter() });

describe("Router Testing", () => {
  test("renders the Home component at root path", () => {
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.containsMatchingElement(<Home />)).toEqual(true);
  });
});
