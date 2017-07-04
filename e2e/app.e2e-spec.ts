import { Bind1Page } from './app.po';

describe('bind1 App', () => {
  let page: Bind1Page;

  beforeEach(() => {
    page = new Bind1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
