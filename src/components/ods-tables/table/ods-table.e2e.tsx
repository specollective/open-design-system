import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-table', () => {
  // it('renders', async () => {
  //   const page = await newE2EPage();
  //   // const headless = false;
  //   // const defaultClass = 'ods-table-default'
  //   // const currentClass = headless ? defaultClass : `${defaultClass} undefined`
  //   await page.setContent(<ods-table></ods-table >)
  //   const element = await page.find('ods-table');
  //   // expect(element).toHaveClass('hydrated');
  //   expect(element).toHaveClass('test-classes');
  // });
  it('renders ods-table', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ods-table >
        <ods-thead>
          <ods-row>
            <ods-header>Person 1</ods-header>
            <ods-header>Person 2</ods-header>
            <ods-header>Person 3</ods-header>
            <ods-header>Person 4</ods-header>
            <ods-header>Person 5</ods-header>
            <ods-header>Person 6</ods-header>
          </ods-row>
        </ods-thead>
      </ods-table>
    `);
    const elm = await page.find('ods-table');
    expect(elm).toEqualText(`
Person 1 Person 2 Person 3 Person 4 Person 5 Person 6
      `);
  });

  it('renders ods-table props', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ods-table>
      </ods-table>
    `);
    // const elm = await page.find('ods-table');
    // const elm =
    await page.$eval('ods-table', (elm: any) => {
      elm.headless = true
      // elm.class = `test-classes`
    });
    await page.waitForChanges();
    // expect(elm).toEqualText(`
    //   `);
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent(`<ods-table class="test classes ods-table-default"></ods-table>`);
    const component = await page.find('ods-table');
    const element = await page.find('ods-table >>> table');
    // expect(element.textContent).toEqual(`Hello, World! I'm `);
    expect(component).not.toHaveClass('toggle-checked');
    // console.log(`component....=>`, component.classList);
    expect(component).toHaveClass('ods-table-default');
    // component.setProperty('first', 'James');
    // await page.waitForChanges();
    // expect(element.textContent).toEqual(`Hello, World! I'm James`);

    // component.setProperty('last', 'Quincy');
    // await page.waitForChanges();
    // expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    // component.setProperty('middle', 'Earl');
    // await page.waitForChanges();
    // expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
