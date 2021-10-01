import { newE2EPage } from '@stencil/core/testing';

describe('my-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-button>Foobar</my-button>');
    const element = await page.find('my-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the disabled property', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-button>Foobar</my-button>');
    const component = await page.find('my-button'),
      nativeButton = await page.find('my-button >>> button');
    expect(nativeButton).not.toHaveAttribute('disabled');

    component.setProperty('disabled', '');
    await page.waitForChanges();
    expect(nativeButton).toHaveAttribute('disabled');

    component.setProperty('disabled', null);
    await page.waitForChanges();
    expect(nativeButton).not.toHaveAttribute('disabled');

    component.setProperty('disabled', 'Funny string foobar 🌸');
    await page.waitForChanges();
    expect(nativeButton).toHaveAttribute('disabled');
  });

  it('renders changes to the loading property', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-button>Foobar</my-button>');
    const component = await page.find('my-button'),
      nativeButton = await page.find('my-button >>> button');
    expect(nativeButton).toEqualAttribute('aria-busy', 'false');

    component.setProperty('loading', '');
    await page.waitForChanges();
    expect(nativeButton).toEqualAttribute('aria-busy', 'true');
  });
});
