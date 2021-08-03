import { newE2EPage } from '@stencil/core/testing';

describe('uc-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uc-tooltip></uc-tooltip>');

    const element = await page.find('uc-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
