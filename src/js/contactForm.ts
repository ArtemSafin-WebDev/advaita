import axios from "axios";
import Modal from "./Modal";
import Validator from "./Validator";

function contactForm(selector = ".js-contact-form") {
  const elements: HTMLElement[] = Array.from(
    document.querySelectorAll(selector)
  );

  elements.forEach((element) => {
    const form = element.querySelector<HTMLFormElement>("form");
    const modal = element.querySelector<HTMLDivElement>(
      ".contact-form__success"
    );
    const closeModalBtn = element.querySelector<HTMLButtonElement>(
      ".contact-form__success-close"
    );
    const controller = new AbortController();
    if (!form) return;

    const validator = new Validator(form);
    let successModal: Modal | null = null;
    if (modal) {
      successModal = new Modal(modal, closeModalBtn);
    }
    form.addEventListener("submit", (event: SubmitEvent) => {
      event.preventDefault();
      validator.validate();

      if (validator.valid) {
        const formData = new FormData(form);

        axios
          .post(form.action, formData, {
            signal: controller.signal,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res.data);
            if (successModal) {
              successModal.openModal();
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  });
}

export default contactForm;
