import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-data', () => {
  it('rendered ods-data correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table>
        <ods-body>
          <ods-data>
            Person 1
          </ods-data>
        </ods-body>
      </ods-table>
    `);

    const data = await page.find('ods-data');
    expect(data).not.toBeNull();
    expect(data).toEqualText(`Person 1`);
  });

  it('assigned the appropriate class', async () => {

    const page = await newE2EPage();
    const dataClass = 'data-class'

    await page.setContent(`
      <ods-table>
        <ods-body>
          <ods-data class="${dataClass}">
            <ods-header>Person 1</ods-header>
            <ods-header>Person 2</ods-header>
            <ods-header>Person 3</ods-header>
          </ods-data>
        </ods-body>
      </ods-table>
    `);

    const data = await page.find('ods-data');
    const dataBaseClass = await page.find('.data-class');
    await page.waitForChanges();

    expect(data).not.toBeNull();
    expect(data).toHaveClass('data-class');
    expect(dataBaseClass).not.toBeNull();
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
        <ods-body>
          <ods-data class="${baseClass}">
            <ods-header>Person 1</ods-header>
            <ods-header>Person 2</ods-header>
            <ods-header>Person 3</ods-header>
          </ods-data>
        </ods-body>
      </ods-table>
    `);

    const data = await page.find('ods-data');
    const dataBaseClass = await page.find('.base-class');
    const hydrated = "hydrated"

    await page.$eval('ods-data',
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
    expect(data).not.toBeNull();
    expect(data).toHaveClass('base-class');
    expect(data).not.toHaveClasses([`${hydrated}custom-class`, `third-class`]);
    expect(dataBaseClass).not.toBeNull();
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
        <ods-body>
          <ods-data class="${baseClass}">
            <ods-header>Person 1</ods-header>
            <ods-header>Person 2</ods-header>
            <ods-header>Person 3</ods-header>
          </ods-data>
        </ods-body>
      </ods-table>
    `);

    const base = await page.find('.base-class');
    const data = await page.find('ods-data');

    await page.$eval('ods-data',
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
    expect(data).not.toBeNull();
    expect(data).toHaveClass('base-class');
    expect(data).toHaveClasses([`${hydrated}custom-class`, "third-class"]);
    expect(base).not.toBeNull();
  });

  it('nested ods-button element maintained it\'s class and onClick() functionality', async () => {
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
          <ods-body>
                <ods-data class="${baseClass}">
                  <ods-button class="${clickStatus}" onClick="${handleClick()}">
                      ${btnMessage}
                  </ods-button>
                </ods-data>
          </ods-body>
      </ods-table>
    `);

    const hydrated = "hydrated"
    const data = await page.find('ods-data');
    const base = await page.find('.base-class');
    const btn = await page.find('ods-button');

    await page.$eval('ods-data',
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
    expect(data).not.toBeNull();
    expect(data).toHaveClass('base-class');
    expect(data).toHaveClasses([`${hydrated}custom-class`, "third-class"]);
    expect(base).not.toBeNull();
    expect(btn).toHaveClass(clickStatus);
    expect(btnMessage).toEqualText("On");
  });

});
