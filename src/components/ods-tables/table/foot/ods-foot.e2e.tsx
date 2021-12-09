import { h } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-foot', () => {
  it('rendered ods-foot correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ods-table>
        <ods-foot>
            Person 1
        </ods-foot>
      </ods-table>
    `);

    const foot = await page.find('ods-foot');
    expect(foot).not.toBeNull();
    expect(foot).toEqualText(`Person 1`);
  });

  it('assigned the appropriate class', async () => {

    const page = await newE2EPage();
    const footClass = 'foot-class'

    await page.setContent(`
      <ods-table>
          <ods-foot class="${footClass}">
            Person 1
          </ods-foot>
      </ods-table>
    `);

    const foot = await page.find('ods-foot');
    const footBaseClass = await page.find('.foot-class');
    await page.waitForChanges();

    expect(foot).not.toBeNull();
    expect(foot).toHaveClass('foot-class');
    expect(footBaseClass).not.toBeNull();
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
        <ods-foot class="${baseClass}">
          Person 1
        </ods-foot>
      </ods-table>
    `);

    const foot = await page.find('ods-foot');
    const footBaseClass = await page.find('.base-class');
    const hydrated = "hydrated"

    await page.$eval('ods-foot',
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
    expect(foot).not.toBeNull();
    expect(foot).toHaveClass('base-class');
    expect(foot).not.toHaveClasses([`${hydrated}custom-class`, `third-class`]);
    expect(footBaseClass).not.toBeNull();
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
        <ods-foot class="${baseClass}">
          <ods-button class="${clickStatus}" onClick="${handleClick()}">
            ${btnMessage}
          </ods-button>
        </ods-foot>
      </ods-table>
    `);
    const hydrated = "hydrated"
    const foot = await page.find('ods-foot');
    const base = await page.find('.base-class');
    const btn = await page.find('ods-button');

    await page.$eval('ods-foot',
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
    expect(foot).not.toBeNull();
    expect(foot).toHaveClass('base-class');
    expect(foot).toHaveClasses([`${hydrated}custom-class`, "third-class"]);
    expect(base).not.toBeNull();
    expect(btn).toHaveClass(clickStatus);
    expect(btnMessage).toEqualText("On");
  });

});
