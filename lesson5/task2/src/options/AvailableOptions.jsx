import { connect } from "react-redux";
import { avialableOptionSelector } from "./options.selectors";
import Options from "./Options";
import { toggleOption } from "./options.actions";

const mapState = (state) => {
  return {
    options: avialableOptionSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};
export default connect(mapState, mapDispatch)(Options);
