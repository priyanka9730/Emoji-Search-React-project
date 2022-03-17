import { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <img
          src="https://cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          alt=""
          height="32"
          width="32"
        />
        Emoji Search
        <img
          src="https://cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          height="32"
          width="32"
          alt=""
        />
      </header>
    );
  }
}
