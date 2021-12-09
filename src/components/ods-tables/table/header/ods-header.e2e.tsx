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
  it('assigned the appropriate class', async () => {

    const page = await newE2EPage();
    const headerClass = 'header-class'

    await page.setContent(`
      <ods-table>
          <ods-header class="${headerClass}">
            <ods-row>Person 1</ods-row>
            <ods-row>Person 2</ods-row>
            <ods-row>Person 3</ods-row>
          </ods-header>
      </ods-table>
    `);

    const header = await page.find('ods-header');
    const headerBaseClass = await page.find('.header-class');
    await page.waitForChanges();

    expect(header).not.toBeNull();
    expect(header).toHaveClass('header-class');
    expect(headerBaseClass).not.toBeNull();
  });


});
