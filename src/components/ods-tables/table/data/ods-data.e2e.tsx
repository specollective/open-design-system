import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-row', () => {
  it('rendered ods-data correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table>
        <ods-body>
          <ods-data>
            Person 1
          </ods-data>
        </ods-thead>
      </ods-table>
    `);

    const data = await page.find('ods-data');
    expect(data).not.toBeNull();
    expect(data).toEqualText(`Person 1`);
  });
});
