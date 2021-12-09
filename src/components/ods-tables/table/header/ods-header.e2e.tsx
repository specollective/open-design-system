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
            Person 1
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

  it('base-class is the only rendered class', async () => {
    const page = await newE2EPage();
    const props = {
      className: "custom-class",
      headless: true
    };
    const baseClass = "base-class"

    await page.setContent(`
      <ods-table>
        < class="${baseClass}">
          Person 1
        </ods-header>
      </ods-table>
    `);

    const header = await page.find('ods-header');
    const headerBaseClass = await page.find('.base-class');
    const hydrated = "hydrated"

    await page.$eval('ods-header',
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
    expect(header).not.toBeNull();
    expect(header).toHaveClass('base-class');
    expect(header).not.toHaveClasses([`${hydrated}custom-class`, `third-class`]);
    expect(headerBaseClass).not.toBeNull();
  });

  it('base && custom class are both rendered', async () => {
    const page = await newE2EPage();
    const props = {
      className: "custom-class",
      headless: false
    };
    const baseClass = "base-class"

    await page.setContent(`
      <ods-table>
        <ods-header class="${baseClass}">
          Person 1
        </ods-header>
      </ods-table>
    `);

    const base = await page.find('.base-class');
    const header = await page.find('ods-header');

    await page.$eval('ods-header',
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
    expect(header).not.toBeNull();
    expect(header).toHaveClass('base-class');
    expect(header).toHaveClasses([`${hydrated}custom-class`, "third-class"]);
    expect(base).not.toBeNull();
  });

  it('nested ods-button maintained it\'s class and onClick() functionality', async () => {
    const page = await newE2EPage();
    const props = {
      className: "custom-class",
      headless: false
    };
    const baseClass = "base-class"
    const clickStatus = "clickable"
    let btnMessage = "Off"

    const handleClick = () => {
      clickStatus == "clickable" ?
        btnMessage = "On"
        :
        btnMessage = "Off"
    }

    await page.setContent(`
      <ods-table>
        <ods-header class="${baseClass}">
          <ods-button class="${clickStatus}" onClick="${handleClick()}">
            ${btnMessage}
          </ods-button>
        </ods-header>
      </ods-table>
    `);

    const hydrated = "hydrated"
    const header = await page.find('ods-header');
    const base = await page.find('.base-class');
    const btn = await page.find('ods-button');

    await page.$eval('ods-header',
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
    expect(header).not.toBeNull();
    expect(header).toHaveClass('base-class');
    expect(header).toHaveClasses([`${hydrated}custom-class`, "third-class"]);
    expect(base).not.toBeNull();
    expect(btn).toHaveClass(clickStatus);
    expect(btnMessage).toEqualText("On");
  });

});
