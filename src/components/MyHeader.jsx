import { Component } from "react";
import MyNav from "./nav";
import UnderNav from "./UnderNav";

export default class MyHeader extends Component {
  render() {
    return (
      <header>
        <MyNav />
        <UnderNav />
      </header>
    );
  }
}
