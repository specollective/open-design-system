import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-table', () => {
  it('has rendered correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table>
        <ods-thead>
          <ods-row>
            <ods-header>Person 1</ods-header>
            <ods-header>Person 2</ods-header>
            <ods-header>Person 3</ods-header>
          </ods-row>
        </ods-thead>
      </ods-table>
    `);
    const elm = await page.find('ods-table');
    expect(elm).toEqualText(`Person 1 Person 2 Person 3`);
  });

  it('has been assigned the appropriate class', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table class="custom-class">
        <ods-thead class="food">
        </ods-thead>
      </ods-table>
    `);

    const element = await page.find('ods-table');
    const customClass = await page.find('ods-table >>> .custom-class');
    const thead = await page.find('ods-thead')
    await page.waitForChanges();

    expect(element).toHaveClass('custom-class');
    expect(thead).toHaveClass('food');
    expect(customClass).not.toBeNull();
  });

  it('only renders base-class', async () => {
    const page = await newE2EPage();
    const props = {
      className: "custom-class",
      headless: true
    };
    const baseClass = "base-class"
    await page.setContent(`
      <ods-table class="${baseClass}">
        <ods-thead class="food">
        </ods-thead>
      </ods-table>
    `);
    const table = await page.find('ods-table');
    const thead = await page.find('ods-thead');
    const base = await page.find('.base-class');

    await page.$eval('ods-table',
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
    expect(table).toHaveClass('base-class');
    expect(table).not.toHaveClass(`${hydro}custom-class`);
    expect(table).not.toHaveClass(`third-class`);
    expect(base).not.toBeNull();
    expect(thead).not.toHaveClass('custom-class');
    expect(thead).not.toHaveClass('test-class');
  });

  it('renders the base && custom classes', async () => {
    const page = await newE2EPage();
    const props = {
      className: "custom-class",
      headless: false
    };
    const baseClass = "base-class"
    await page.setContent(`
      <ods-table class="${baseClass}">
        <ods-thead class="food">
        </ods-thead>
      </ods-table>
    `);
    const table = await page.find('ods-table');
    const thead = await page.find('ods-thead');
    const base = await page.find('.base-class');


    await page.$eval('ods-table',
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
    expect(table).toHaveClass('base-class');
    expect(table).toHaveClass(`${hydrated}custom-class`);
    expect(table).toHaveClass(`third-class`);
    expect(base).not.toBeNull();
    expect(thead).not.toHaveClass('custom-class');
    expect(thead).not.toHaveClass('test-class');
  });

  it('nested ods-button element maintains it\'s class and onClick() functionality', async () => {
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
      <ods-table
        class="${baseClass}">
          <ods-thead
            class="food">
              <ods-button
                class="${clickStatus}"
                onClick="${handleClick()}">
                  ${btnMessage}
              </ods-button>
          </ods-thead>
      </ods-table>
    `);
    const hydrated = "hydrated"
    const table = await page.find('ods-table');
    const thead = await page.find('ods-thead');
    const base = await page.find('.base-class');
    const btn = await page.find('ods-button');
    await page.$eval('ods-table',
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
    expect(table).toHaveClass('base-class');
    expect(table).toHaveClass(`${hydrated}custom-class`);
    expect(table).toHaveClass(`third-class`);
    expect(base).not.toBeNull();
    expect(thead).not.toHaveClass('custom-class');
    expect(btn).toHaveClass(clickStatus);
    expect(btnMessage).toEqualText("On");
  });

});
