import { FacepopAngularPage } from './app.po';

describe('facepop-angular App', () => {
  let page: FacepopAngularPage;

  beforeEach(() => {
    page = new FacepopAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
