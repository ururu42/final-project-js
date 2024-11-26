import { Component } from "../core/Component";
import dayjs from "dayjs"; // ES 2015
import { App } from "./App";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: dayjs(new Date()).format("DD/MM/YYYY, HH:mm:ss - "),
      amount: props.amount,
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";
    this.$rootElement.textContent = `${this.state.date}`;

    this.b = document.createElement("b");
    this.b.textContent = ` $${this.props.amount}`;

    this.$rootElement.appendChild(this.b);

    this.button = document.createElement("button");
    this.button.className = "delete-button";
    this.button.textContent = "Удалить";

    this.$rootElement.appendChild(this.button);

    this.button.addEventListener("click", (event) => {
      if (event.target) {
        props.onDelete(this.state.id);
      }
    });
  }
}
