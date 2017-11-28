import { NgBootstarpSamplePage } from './app.po';

describe('ng-bootstarp-sample App', function() {
  let page: NgBootstarpSamplePage;

  beforeEach(() => {
    page = new NgBootstarpSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
