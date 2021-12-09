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

  it('assigned the appropriate class', async () => {

    const page = await newE2EPage();
    const bodyClass = 'body-class'

    await page.setContent(`
      <ods-table>
          <ods-body class="${bodyClass}">
            <ods-row>Person 1</ods-row>
            <ods-row>Person 2</ods-row>
            <ods-row>Person 3</ods-row>
          </ods-body>
      </ods-table>
    `);

    const body = await page.find('ods-body');
    const bodyBaseClass = await page.find('.body-class');
    await page.waitForChanges();

    expect(body).not.toBeNull();
    expect(body).toHaveClass('body-class');
    expect(bodyBaseClass).not.toBeNull();
  });

  it('base-class is the only rendered class', async () => {
    const page = await newE2EPage();
    const props = {
      className: "custom-class",
      headless: true
    };
    const baseClass = "base-class"

    await page.setContent(`
      <ods-table>
        <ods-body class="${baseClass}">
          <ods-header>Person 1</ods-header>
          <ods-header>Person 2</ods-header>
          <ods-header>Person 3</ods-header>
        </ods-body>
      </ods-table>
    `);

    const body = await page.find('ods-body');
    const bodyBaseClass = await page.find('.base-class');
    const hydrated = "hydrated"

    await page.$eval('ods-body',
      (element: any, { className, headless }) => {
        const baseClass = "base-class"
        element.headless = headless;
        element.headless ?
          element.className = baseClass :
          element.className += `${className} third-class`
      },
      props
    );

    await page.waitForChanges();
    expect(body).not.toBeNull();
    expect(body).toHaveClass('base-class');
    expect(body).not.toHaveClasses([`${hydrated}custom-class`, `third-class`]);
    expect(bodyBaseClass).not.toBeNull();
  });

});
