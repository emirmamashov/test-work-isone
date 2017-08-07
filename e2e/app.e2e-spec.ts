import { TestWorkIsonePage } from './app.po';

describe('test-work-isone App', () => {
  let page: TestWorkIsonePage;

  beforeEach(() => {
    page = new TestWorkIsonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
