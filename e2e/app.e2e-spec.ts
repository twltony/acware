import { AcwarePage } from './app.po';

describe('acware App', () => {
  let page: AcwarePage;

  beforeEach(() => {
    page = new AcwarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
