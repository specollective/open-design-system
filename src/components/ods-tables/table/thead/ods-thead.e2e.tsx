import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-thead', () => {
  it('rendered ods-thead correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table>
        <ods-thead>
            Person 1
        </ods-thead>
      </ods-table>
    `);

    const thead = await page.find('ods-thead');
    expect(thead).not.toBeNull();
    expect(thead).toEqualText(`Person 1`);
  });

  it('assigned the appropriate class', async () => {

    const page = await newE2EPage();
    const theadClass = 'thead-class'

    await page.setContent(`
      <ods-table>
          <ods-thead class="${theadClass}">
            Person 1
          </ods-thead>
      </ods-table>
    `);

    const thead = await page.find('ods-thead');
    const theadBaseClass = await page.find('.thead-class');
    await page.waitForChanges();

    expect(thead).not.toBeNull();
    expect(thead).toHaveClass('thead-class');
    expect(theadBaseClass).not.toBeNull();
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
        <ods-thead class="${baseClass}">
          Person 1
        </ods-thead>
      </ods-table>
    `);

    const thead = await page.find('ods-thead');
    const theadBaseClass = await page.find('.base-class');
    const hydrated = "hydrated"

    await page.$eval('ods-thead',
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
    expect(thead).not.toBeNull();
    expect(thead).toHaveClass('base-class');
    expect(thead).not.toHaveClasses([`${hydrated}custom-class`, `third-class`]);
    expect(theadBaseClass).not.toBeNull();
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
        <ods-thead class="${baseClass}">
          Person 1
        </ods-thead>
      </ods-table>
    `);

    const base = await page.find('.base-class');
    const thead = await page.find('ods-thead');

    await page.$eval('ods-thead',
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
    expect(thead).not.toBeNull();
    expect(thead).toHaveClass('base-class');
    expect(thead).toHaveClasses([`${hydrated}custom-class`, "third-class"]);
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
        <ods-thead class="${baseClass}">
          <ods-button class="${clickStatus}" onClick="${handleClick()}">
            ${btnMessage}
          </ods-button>
        </ods-thead>
      </ods-table>
    `);

    const hydrated = "hydrated"
    const thead = await page.find('ods-thead');
    const base = await page.find('.base-class');
    const btn = await page.find('ods-button');

    await page.$eval('ods-thead',
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
    expect(thead).not.toBeNull();
    expect(thead).toHaveClass('base-class');
    expect(thead).toHaveClasses([`${hydrated}custom-class`, "third-class"]);
    expect(base).not.toBeNull();
    expect(btn).toHaveClass(clickStatus);
    expect(btnMessage).toEqualText("On");
  });

});
