import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";

interface ModalOptions {
  closeButton?: HTMLButtonElement | (HTMLButtonElement | null)[];
  openButton?: HTMLButtonElement | (HTMLButtonElement | null)[];
}

class Modal {
  private modal;
  private options;
  public open: boolean = false;
  constructor(modal: HTMLElement, options: ModalOptions) {
    this.modal = modal;
    this.options = options;
    this.setHandlers();
  }

  openModal(): void {
    if (this.open) return;
    this.modal.classList.add("active");
    disableBodyScroll(this.modal);
    this.open = true;
  }

  closeModal(): void {
    if (!this.open) return;
    this.modal.classList.remove("active");
    clearAllBodyScrollLocks();
    this.open = false;
  }

  private setHandlers() {
    if (this.options.closeButton) {
      if (Array.isArray(this.options.closeButton)) {
        this.options.closeButton.forEach((btn) => {
          if (btn !== null) {
            btn.addEventListener("click", (event: MouseEvent) => {
              event.preventDefault();
              this.closeModal();
            });
          }
        });
      } else {
        this.options.closeButton.addEventListener(
          "click",
          (event: MouseEvent) => {
            event.preventDefault();
            this.closeModal();
          }
        );
      }
    }
    if (this.options.openButton) {
      if (Array.isArray(this.options.openButton)) {
        this.options.openButton.forEach((btn) => {
          if (btn !== null) {
            btn.addEventListener("click", (event: MouseEvent) => {
              event.preventDefault();
              this.openModal();
            });
          }
        });
      } else {
        this.options.openButton.addEventListener(
          "click",
          (event: MouseEvent) => {
            event.preventDefault();
            this.openModal();
          }
        );
      }
    }
  }
}

export type { ModalOptions };

export default Modal;
