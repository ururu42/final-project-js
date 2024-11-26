import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    this.h1 = document.createElement("h1");
    this.h1.className = "total-amount";
    this.h1.textContent = "Итого: ";
    this.$total = document.createElement("span");
    this.$total.textContent = `$${this.state.total}`;

    this.h1.append(this.$total);
    this.$rootElement.appendChild(this.h1);

    // ...

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    this.donateList = new List();
    this.$rootElement.appendChild(this.donateList.$rootElement);
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount: amount,
      onDelete: this.onItemDelete.bind(this),
    });
    this.state.donates.push(item);

    this.donateList.addItem(item);

    this.state.total += amount;
    this.$total.textContent = `$${this.state.total}`;
  }

  onItemDelete(id) {
    const deleteElement = this.state.donates.filter((element) => {
      return element.state.id === id;
    });

    this.state.total -= deleteElement[0].state.amount;
    this.$total.textContent = `$${this.state.total}`;

    const newArr = this.state.donates.filter((element) => {
      return element.state.id !== id;
    });
    this.state.donates = newArr;

    this.donateList.deleteItem(deleteElement);
  }
}
