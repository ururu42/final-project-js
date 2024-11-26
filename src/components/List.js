import { Component } from "../core/Component";
import { ListItem } from "./ListItem";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    this.h2 = document.createElement("h2");
    this.h2.className = "donates-container__title";
    this.h2.textContent = "Список донатов";

    this.divDonateContainer = document.createElement("div");
    this.divDonateContainer.className = "donates-container__donates";
    this.$listContainer = this.divDonateContainer;

    this.$rootElement.appendChild(this.h2);
    this.$rootElement.appendChild(this.divDonateContainer, this.h2);
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }

  deleteItem(item) {
    const elementHTML = item[0].$rootElement;
    elementHTML.remove();
  }
}
