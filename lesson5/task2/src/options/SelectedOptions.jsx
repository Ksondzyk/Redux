import { connect } from "react-redux";
import { selectedOptionSelector } from "./options.selectors";
import Options from "./Options";
import { toggleOption } from "./options.actions";

const mapState = (state) => {
  return {
    options: selectedOptionSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};
export default connect(mapState, mapDispatch)(Options);
