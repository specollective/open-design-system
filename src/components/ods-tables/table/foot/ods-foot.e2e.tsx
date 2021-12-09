import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-foot', () => {
  it('rendered ods-foot correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table>
        <ods-foot>
            Person 1
        </ods-foot>
      </ods-table>
    `);

    const foot = await page.find('ods-foot');
    expect(foot).not.toBeNull();
    expect(foot).toEqualText(`Person 1`);
  });


});
