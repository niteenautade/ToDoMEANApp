import { LearnAngularAppPage } from './app.po';

describe('learn-angular-app App', () => {
  let page: LearnAngularAppPage;

  beforeEach(() => {
    page = new LearnAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
