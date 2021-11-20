import { newSpecPage } from '@stencil/core/testing';
import { ODSTable } from './ods-table';

describe('ods-table', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ODSTable],
      html: '<ods-table></ods-table>',
    });
    expect(root).toEqualHtml(`
      <ods-table>
        <mock:shadow-root>
          <table>

        </table>
        </mock:shadow-root>
      </ods-table>
    `);
  });


});
