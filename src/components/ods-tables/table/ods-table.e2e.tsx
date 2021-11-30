import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-table', () => {
  it('ods-table and it\'s contents have rendered correctly', async () => {
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

  // it('renders ods-table props', async () => {
  //   const page = await newE2EPage();
  //   await page.setContent(`
  //     <ods-table class="healthy">
  //     </ods-table>
  //   `);
  //   const compy = await page.find('ods-table');
  //   compy.setProperty('headless', 'true');
  //   await page.waitForChanges();
  //   expect(compy).toHaveClass('healthy');

  //   const component = await page.find('ods-table');
  //   const element = await page.find('ods-table');
  // });

  it('ods-table has been assigned the appropriate class', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table class="coins">
        <ods-thead class="food">
          // <ods-row>
            // <ods-header>Person 1</ods-header>
            // <ods-header>Person 2</ods-header>
            // <ods-header>Person 3</ods-header>
            // <ods-header>Person 4</ods-header>
            // <ods-header>Person 5</ods-header>
            // <ods-header>Person 6</ods-header>
          // </ods-row>
        </ods-thead>
      </ods-table>
    `);

    const element = await page.find('ods-table');
    const coins = await page.find('ods-table >>> .coins');
    const thead = await page.find('ods-thead')
    await page.waitForChanges();

    expect(element).toHaveClass('coins');
    expect(thead).toHaveClass('food');
    expect(coins).not.toBeNull();
  });

  // it('a @PROP() is set on the ods-table', async () => {
  //   const props = {
  //     first: 'Marty',
  //     lastName: 'McFly',
  //   };
  //   const page = await newE2EPage();
  //   await page.setContent(`
  //   <ods-table class="pals" status="true">
  //      <ods-thead class="food">
  //         // <ods-row>
  //           // <ods-header>Person 1</ods-header>
  //           // <ods-header>Person 2</ods-header>
  //           // <ods-header>Person 3</ods-header>
  //           // <ods-header>Person 4</ods-header>
  //           // <ods-header>Person 5</ods-header>
  //           // <ods-header>Person 6</ods-header>
  //         // </ods-row>
  //       </ods-thead>
  //   </ods-table>`)
  //   const table = page.find('ods-table');
  //   // page.$eval('ods-table', (elm: any) => {
  //   // within the browser's context
  //   // let's set new property values on the component
  //   // elm.headless = 'Marty';
  //   // elm.lastName = 'McFly';
  //   // });
  //   await page.waitForChanges();
  //   // expect(page).toHaveClass('food');
  //   expect(table).toEqualText(``)

  // });

  it('ods-table renders props like a boss', async () => {
    const page = await newE2EPage();
    const props = {
      "<ods-row>": 'Marty',
      // lastName: 'McFly',
    };
    await page.setContent(`
      <ods-table class="coins">
        <ods-thead class="food">
          // <ods-row>
            // <ods-header>Person 1</ods-header>
            // <ods-header>Person 2</ods-header>
            // <ods-header>Person 3</ods-header>
            // <ods-header>Person 4</ods-header>
            // <ods-header>Person 5</ods-header>
            // <ods-header>Person 6</ods-header>
          // </ods-row>
        </ods-thead>
      </ods-table>
    `);
    await page.$eval('ods-table',
      (elm: any, { first, lastName }) => {
        elm.first = first;
        elm.lastName = lastName;
      },
      // props
    );

    await page.waitForChanges();
  });

});
