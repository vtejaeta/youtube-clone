import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";

export const renderWithRedux = (ui) => {
  return render(<Provider store={store}>{ui}</Provider>);
};
