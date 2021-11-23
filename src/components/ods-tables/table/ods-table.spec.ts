import { newSpecPage } from '@stencil/core/testing';
import { ODSTable } from './ods-table';

describe('ods-table', () => {
  it('renders with test values', async () => {
    const headless = false;
    const defaultClass = 'ods-table-default'
    const currentClass = headless ? defaultClass : `${defaultClass} undefined`
    const display = `
      <ods-table>
        <mock:shadow-root>
        <table class="${currentClass}">
        <slot />
        </table>
        </mock:shadow-root>
      </ods-table>
    `

    const { root } = await newSpecPage({
      components: [ODSTable],
      html: '<ods-table></ods-table>',
      // template: () => ()
    });
    expect(root).toEqualHtml(display);
  });


});
