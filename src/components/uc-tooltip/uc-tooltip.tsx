import { Component, Host, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'uc-tooltip',
  styleUrl: 'uc-tooltip.css',
  shadow: true,
})
export class UcTooltip {
  @Prop({ reflect: true, mutable: true }) isVisible: boolean;
  @Prop({ reflect: true }) text: string;

  private divEl: HTMLElement;

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
  // hover events
  @Listen('click', { target: 'window', capture: false })
  listenOutside(event: any) {
    // console.log(e.target);
    // console.log(this.divEl);
    if (!this.divEl.contains(event.target)) {
      this.isVisible = false;
      return;
    }
    this.isVisible = !this.isVisible;
  }

  render() {
    const { isVisible } = this;
    return (
      <Host ref={el => (this.divEl = el as HTMLDivElement)}>
        <span>Tooltip</span>
        <div class={`icon-container unselectable`}>
          <slot />
        </div>
        <div class={`tooltip ${isVisible ? 'visible' : ''}`}>
          <span>{this.text}</span>
        </div>
      </Host>
    );
  }
}
