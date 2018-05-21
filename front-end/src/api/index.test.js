import api from './index';

describe('API actions work fine', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
      resolve({
        ok: true,
        json: () => ({ id: 2056777518 }),
      });
    }));
  });

  it('Get bids data', async () => {
    const response = await api.getBids();
    expect(response.id).toBe(2056777518);
  });
});

describe('API actions do not work properly', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
      resolve({
        ok: false,
        statusText: 400,
      });
    }));
  });

  it('Get bids data throws an error', async () => {
    expect.assertions(1);
    await expect(api.getBids()).rejects.toEqual(new Error(400));
  });
});

