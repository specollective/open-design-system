import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-input-numeric', () => {
  it('has rendered correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-input-numeric>
      </ods-input-numeric>
    `);
    const elm = await page.find('ods-input-numeric');
    expect(elm).toEqualText(``);
  });

  it('has been assigned the appropriate class', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-input-numeric class="custom-class">
      </ods-input-numeric>
    `);

    const element = await page.find('ods-input-numeric');
    const customClass = await page.find('ods-input-numeric >>> .custom-class');
    await page.waitForChanges();

    expect(element).toHaveClass('custom-class');
    expect(customClass).not.toBeNull();
  });

  it('base-class is the only rendered class', async () => {
    const page = await newE2EPage();
    const props = {
      className: "custom-class",
      headless: true
    };
    const baseClass = "base-class"
    await page.setContent(`
      <ods-input-numeric class="${baseClass}">
      </ods-input-numeric>
    `);
    const numeric = await page.find('ods-input-numeric');
    const base = await page.find('.base-class');

    await page.$eval('ods-input-numeric',
      (element: any, { className, headless }) => {
        const baseClass = "base-class"
        element.headless = headless;

        element.headless ?
          element.className = baseClass :
          element.className += `${className} third-class`

      },
      props
    );
    const hydro = "hydrated"
    await page.waitForChanges();
    expect(numeric).toHaveClass('base-class');
    expect(numeric).not.toHaveClass(`${hydro}custom-class`);
    expect(numeric).not.toHaveClass(`third-class`);
    expect(base).not.toBeNull();
  });

  it('base && custom class are both rendered', async () => {
    const page = await newE2EPage();
    const props = {
      className: "custom-class",
      headless: false
    };
    const baseClass = "base-class"
    await page.setContent(`
      <ods-input-numeric class="${baseClass}">
      </ods-input-numeric>
    `);
    const numeric = await page.find('ods-input-numeric');
    const base = await page.find('.base-class');


    await page.$eval('ods-input-numeric',
      (element: any, { className, headless }) => {
        const baseClass = "base-class"
        element.headless = headless;

        element.headless ?
          element.className = baseClass :
          element.className += `${className} third-class`
      },
      props
    );
    const hydrated = "hydrated"
    await page.waitForChanges();
    expect(numeric).toHaveClass('base-class');
    expect(numeric).toHaveClass(`${hydrated}custom-class`);
    expect(numeric).toHaveClass(`third-class`);
    expect(base).not.toBeNull();
  });

});
