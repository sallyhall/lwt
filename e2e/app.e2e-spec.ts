import { LiftFasterPage } from './app.po';

describe('lift-faster App', function() {
  let page: LiftFasterPage;

  beforeEach(() => {
    page = new LiftFasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
