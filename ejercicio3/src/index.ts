import { HasFormatter } from "./interfaces/HasFormatter.js";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener("submit", (ev: Event) => {
  ev.preventDefault();

  let doc: HasFormatter;

  if (type.value == "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});
