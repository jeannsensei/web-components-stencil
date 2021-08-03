import { newSpecPage } from '@stencil/core/testing';
import { UcTooltip } from '../uc-tooltip';

describe('uc-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UcTooltip],
      html: `<uc-tooltip></uc-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <uc-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uc-tooltip>
    `);
  });
});
