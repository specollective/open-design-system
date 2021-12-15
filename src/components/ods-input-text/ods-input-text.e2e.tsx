import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-input-text', () => {
  it('has rendered correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-input-text>
      </ods-input-text>
    `);
    const elm = await page.find('ods-input-text');
    expect(elm).toEqualText(``);
  });

  it('has been assigned the appropriate class', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-input-text class="custom-class">
      </ods-input-text>
    `);

    const element = await page.find('ods-input-text');
    const customClass = await page.find('ods-input-text >>> .custom-class');
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
      <ods-input-text class="${baseClass}">
      </ods-input-text>
    `);
    const text = await page.find('ods-input-text');
    const base = await page.find('.base-class');

    await page.$eval('ods-input-text',
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
    expect(text).toHaveClass('base-class');
    expect(text).not.toHaveClass(`${hydro}custom-class`);
    expect(text).not.toHaveClass(`third-class`);
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
      <ods-input-text class="${baseClass}">
      </ods-input-text>
    `);
    const text = await page.find('ods-input-text');
    const base = await page.find('.base-class');


    await page.$eval('ods-input-text',
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
    expect(text).toHaveClass('base-class');
    expect(text).toHaveClass(`${hydrated}custom-class`);
    expect(text).toHaveClass(`third-class`);
    expect(base).not.toBeNull();
  });
});
