import { newSpecPage } from '@stencil/core/testing';
import { MyButton } from './my-button';

describe('my-button', () => {
  it('renders', async () => {
    const textContent = 'Foobar';
    const { root } = await newSpecPage({
      components: [MyButton],
      html: `<my-button>${textContent}</my-button>`,
    });
    expect(root).toEqualHtml(`
      <my-button>
        <mock:shadow-root>
          <button aria-busy="false">
            <slot></slot>
          </button>
        </mock:shadow-root>
        ${textContent}
      </my-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyButton],
      html: `<my-button loading disabled></my-button>`,
    });
    expect(root).toEqualHtml(`
      <my-button loading="" disabled="">
        <mock:shadow-root>
          <button disabled="" aria-busy="true">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </my-button>
    `);
  });
});
