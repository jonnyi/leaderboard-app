jest.mock('react-dom');

describe('App Entry Point - /src/index.js', () => {
  it('renders app wihtout error', () => {
    require('../src/index.js');
  });
});
