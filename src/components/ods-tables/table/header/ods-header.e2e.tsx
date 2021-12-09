import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-header', () => {
  it('rendered ods-header correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table>
        <ods-header>
            Person 1
        </ods-header>
      </ods-table>
    `);

    const header = await page.find('ods-header');
    expect(header).not.toBeNull();
    expect(header).toEqualText(`Person 1`);
  });



});
