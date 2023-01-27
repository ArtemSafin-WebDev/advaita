import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";

class Modal {
  private modal;
  private closeButton;
  private openButton;
  public open: boolean = false;
  constructor(
    modal: HTMLElement,
    closeButton: HTMLButtonElement | null = null,
    openButton: HTMLButtonElement | null = null
  ) {
    this.modal = modal;
    this.closeButton = closeButton;
    this.openButton = openButton;
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
    if (this.closeButton) {
      this.closeButton.addEventListener("click", (event: MouseEvent) => {
        event.preventDefault();
        this.closeModal();
      });
    }

    if (this.openButton) {
      this.openButton.addEventListener("click", (event: MouseEvent) => {
        event.preventDefault();
        this.openModal();
      });
    }
  }
}

export default Modal;
