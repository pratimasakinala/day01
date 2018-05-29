import { Day01Page } from './app.po';

describe('day01 App', () => {
  let page: Day01Page;

  beforeEach(() => {
    page = new Day01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
