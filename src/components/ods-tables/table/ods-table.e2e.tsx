import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-table', () => {
  it('ods-table and it\'s contents have rendered correctly', async () => {
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
    expect(elm).toEqualText(`
Person 1 Person 2 Person 3
      `);
  });

  it('ods-table has been assigned the appropriate class', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table class="coins">
        <ods-thead class="food">
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

  it('ods-table renders props', async () => {
    const page = await newE2EPage();
    const props = {
      className: "custom-class",
      headless: "true"
    };

    await page.setContent(`
      <ods-table class="coins ${props.className}" headless=${props.headless}>
        <ods-thead class="food">
        </ods-thead>
      </ods-table>
    `);
    const table = await page.find('ods-table');
    const thead = await page.find('ods-thead');
    // const coins = await page.find('.coins');

    await page.$eval('ods-table',
      (element: any, { className, headless }) => {
        element.className += `coins ${className} honey`;
        element.headless = headless;
        console.log("element.className => ", element.className);
        console.log("element.headless => ", element.headless);
      },
      props
    );

    await page.waitForChanges();
    // expect(table).toHaveLength(1);
    expect(table).toHaveClass('coins');
    // expect(coins).not.toHaveLength(1);
    expect(table).toHaveClass('honey');
    expect(table).toHaveClass('custom-class');

    expect(thead).not.toHaveClass('custom-class');
    // expect(thead).toHaveClass('custom-class');  |
    expect(thead).not.toHaveClass('coins');
    // expect(thead).toHaveClass('food');
  });

});
