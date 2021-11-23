import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ODSTable } from './ods-table';

describe('ods-table', () => {
  xit('renders with test values', async () => {
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
    const page = await newSpecPage({
      components: [ODSTable],
      html: '<ods-table></ods-table>',
      // template: () => (<ods-table > </ods-table>)
    });
    expect(page.root).toEqualHtml(display);
  });


});
