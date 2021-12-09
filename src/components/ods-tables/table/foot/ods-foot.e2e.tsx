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

it('assigned the appropriate class', async () => {

  const page = await newE2EPage();
  const footClass = 'foot-class'

  await page.setContent(`
      <ods-table>
          <ods-foot class="${footClass}">
            Person 1
          </ods-foot>
      </ods-table>
    `);

  const foot = await page.find('ods-foot');
  const footBaseClass = await page.find('.foot-class');
  await page.waitForChanges();

  expect(foot).not.toBeNull();
  expect(foot).toHaveClass('foot-class');
  expect(footBaseClass).not.toBeNull();
});
});
