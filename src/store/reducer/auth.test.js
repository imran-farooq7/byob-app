import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth redcucer", () => {
  it("should authentication", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
});
