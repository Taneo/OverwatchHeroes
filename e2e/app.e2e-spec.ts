import { AngtutPage } from './app.po';

describe('angtut App', () => {
  let page: AngtutPage;

  beforeEach(() => {
    page = new AngtutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
