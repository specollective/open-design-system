import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-body', () => {
  it('rendered ods-body correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table>
        <ods-body>
            Person 1
        </ods-body>
      </ods-table>
    `);

    const body = await page.find('ods-body');
    expect(body).not.toBeNull();
    expect(body).toEqualText(`Person 1`);
  });

});
