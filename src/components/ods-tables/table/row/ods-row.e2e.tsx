import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-row', () => {
  it('rendered one ods-row correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table>
        <ods-thead>
          <ods-row>
            <ods-header>Row 1</ods-header>
            <ods-header>Row 2</ods-header>
            <ods-header>Row 3</ods-header>
          </ods-row>
        </ods-thead>
      </ods-table>
    `);

    const row = await page.find('ods-row');
    expect(row).not.toBeNull();
    expect(row).toEqualText(`Row 1 Row 2 Row 3`);
  });

  it('rendered multiple ods-rows correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table>
        <ods-thead>
          <ods-row> Row 1 </ods-row>
          <ods-row> Row 2 </ods-row>
          <ods-row> Row 3 </ods-row>
        </ods-thead>
      </ods-table>
    `);

    const thead = await page.find('ods-thead');
    expect(thead).toEqualText(`Row 1 Row 2 Row 3`);
  });

  it('assigned the appropriate class', async () => {

    const page = await newE2EPage();
    const rowClass = 'row-class'

    await page.setContent(`
      <ods-table>
        <ods-thead>
          <ods-row class="${rowClass}">
            <ods-header>Person 1</ods-header>
            <ods-header>Person 2</ods-header>
            <ods-header>Person 3</ods-header>
          </ods-row>
        </ods-thead>
      </ods-table>
    `);

    const row = await page.find('ods-row');
    const rowBaseClass = await page.find('.row-class');
    await page.waitForChanges();

    expect(row).not.toBeNull();
    expect(row).toHaveClass('row-class');
    expect(rowBaseClass).not.toBeNull();
  });

  it('only rendered base-class', async () => {
    const page = await newE2EPage();
    const props = {
      className: "custom-class",
      headless: true
    };
    const baseClass = "base-class"

    await page.setContent(`
      <ods-table>
        <ods-thead>
          <ods-row class="${baseClass}">
            <ods-header>Person 1</ods-header>
            <ods-header>Person 2</ods-header>
            <ods-header>Person 3</ods-header>
          </ods-row>
        </ods-thead>
      </ods-table>
    `);

    const row = await page.find('ods-row');
    const rowBaseClass = await page.find('.base-class');
    const hydrated = "hydrated"

    await page.$eval('ods-row',
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
    expect(row).not.toBeNull();
    expect(row).toHaveClass('base-class');
    expect(row).not.toHaveClasses([`${hydrated}custom-class`, `third-class`]);
    expect(rowBaseClass).not.toBeNull();
  });

  it('rendered the base && custom classes', async () => {
    const page = await newE2EPage();
    const props = {
      className: "custom-class",
      headless: false
    };
    const baseClass = "base-class"

    await page.setContent(`
      <ods-table>
        <ods-thead>
          <ods-row class="${baseClass}">
            <ods-header>Person 1</ods-header>
            <ods-header>Person 2</ods-header>
            <ods-header>Person 3</ods-header>
          </ods-row>
        </ods-thead>
      </ods-table>
    `);

    const base = await page.find('.base-class');
    const row = await page.find('ods-row');

    await page.$eval('ods-row',
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
    expect(row).not.toBeNull();
    expect(row).toHaveClass('base-class');
    expect(row).toHaveClasses([`${hydrated}custom-class`, "third-class"]);
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
          <ods-thead>
                <ods-row class="${baseClass}">
                  <ods-button class="${clickStatus}" onClick="${handleClick()}">
                      ${btnMessage}
                  </ods-button>
                </ods-row>
          </ods-thead>
      </ods-table>
    `);

    const hydrated = "hydrated"
    const row = await page.find('ods-row');
    const base = await page.find('.base-class');
    const btn = await page.find('ods-button');

    await page.$eval('ods-row',
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
    expect(row).not.toBeNull();
    expect(row).toHaveClass('base-class');
    expect(row).toHaveClasses([`${hydrated}custom-class`, "third-class"]);
    expect(base).not.toBeNull();
    expect(btn).toHaveClass(clickStatus);
    expect(btnMessage).toEqualText("On");
  });

});
