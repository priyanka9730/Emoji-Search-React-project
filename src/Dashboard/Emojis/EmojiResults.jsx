import { PureComponent } from "react";
import EmojiResultRow from "./EmojiResultRow";
import Clipboard from "clipboard";

export default class EmojiResults extends PureComponent {
  componentDidMount() {
    this.Clipboard = new Clipboard(".copy-it");
  }

  componentWillUnmount() {
    this.Clipboard.destroy();
  }
  render() {
    const { emojiData } = this.props;
    return (
      <div className="component-emoji-reults">
        {emojiData.map((emoji) => (
          <EmojiResultRow
            key={emoji.title}
            symbol={emoji.symbol}
            title={emoji.title}
          />
        ))}
      </div>
    );
  }
}
