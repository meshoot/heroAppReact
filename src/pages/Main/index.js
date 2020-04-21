import { connect } from "react-redux";

import Main from './Main'

const mapStateToProps = state => {
  return {
    heroes: state.heroes
  }
};

export default connect(mapStateToProps)(Main)

