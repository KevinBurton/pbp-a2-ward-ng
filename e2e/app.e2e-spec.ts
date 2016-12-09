import { PbpA2WardNgPage } from './app.po';

describe('pbp-a2-ward-ng App', function() {
  let page: PbpA2WardNgPage;

  beforeEach(() => {
    page = new PbpA2WardNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
