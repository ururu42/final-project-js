import { Component } from "../core/Component";

// newForm = new Form({ onSubmit: this.onItemCreate.bind(this) });

export class Form extends Component {
  get isValid() {
    if (this.state.amount >= 1 && this.state.amount <= 100) {
      return true;
    } else {
      return false;
    }
  }

  setup(props) {
    this.state = {
      amount: "",
    };
    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";

    this.label = document.createElement("label");
    this.label.className = "donate-form__input-label";
    this.label.textContent = "Введите сумму в $";

    this.$input = document.createElement("input");
    this.$input.className = "donate-form__donate-input";
    this.$input.setAttribute("name", "amount");
    this.$input.setAttribute("type", "number");
    this.$input.setAttribute("max", "100");
    this.$input.setAttribute("min", "1");
    this.$input.setAttribute("required", "");

    this.$button = document.createElement("button");
    this.$button.setAttribute("disabled", "true");
    this.$button.className = "donate-form__submit-button";
    this.$button.setAttribute("type", "submit");
    this.$button.textContent = "Задонатить";

    this.label.append(this.$input);
    this.$rootElement.append(this.label);
    this.$rootElement.append(this.$button);

    this.$input.addEventListener("input", this.handleInput.bind(this));

    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleInput(event) {
    this.state.amount = event.target.value;

    if (this.isValid === false) {
      this.$button.disabled = true;
    }
    if (this.isValid === true) {
      this.$button.disabled = false;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.isValid === true) {
      // console.log(this.state.amount);
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = "";
      this.$input.value = "";
    }
  }
}
