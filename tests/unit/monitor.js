const assert = require('assert');
const Monitor = require('../../monitor');

describe('Monitor', () => {

  it('should return the list of applications session time', () => {
    const monitor = new Monitor();
    const items = [
      {
        app: 'Google',
        title: 'Google Title'
      },
      {
        app: 'Google',
        title: 'Google Title2'
      },
      {
        app: 'Mozilla',
        title: 'Mozilla title 1'
      },
      {
        app: 'Mozilla',
        title: 'Mozilla title 2'
      },
      {
        app: 'Google',
        title: 'Google Title2'
      },
    ];

    monitor.setItems(items);
    const applications = monitor.getApplicationTime();
    assert.deepEqual(applications, [
      {app: 'Google', time: '00:00:03' },
      {app: 'Mozilla', time: '00:00:02' },
    ])
  });
  
  it('should return the only one application with it\'s session time', () => {
    const monitor = new Monitor();
    const items = [
      {
        app: 'Google',
        title: 'Google Title'
      },
      {
        app: 'Google',
        title: 'Google Title'
      },
      {
        app: 'Google',
        title: 'Google Title'
      },
      {
        app: 'Google',
        title: 'Google Title'
      },
    ];

    monitor.setItems(items);
    const applications = monitor.getApplicationTime();
    assert.deepEqual(applications, [
      {app: 'Google', time: '00:00:04' },
    ])
  });

  it('should return browser session time', () => {
    const monitor = new Monitor();
    const items = [
      {
        app: 'chrome',
        title: 'google Title'
      },
      {
        app: 'chrome',
        title: 'google Title2'
      },
      {
        app: 'firefox',
        title: 'Mozilla title 1'
      },
      {
        app: 'firefox',
        title: 'Mozilla title 2'
      },
      {
        app: 'chrome',
        title: 'google Title2'
      },
      {
        app: 'visual code',
        title: 'Visual code'
      },
      {
        app: 'visual code',
        title: 'Visual code'
      },
      {
        app: 'visual code',
        title: 'Visual code'
      }
    ];

    monitor.setItems(items);
    const browsers = monitor.getBrowserTime();
    
    assert.deepEqual(browsers, [
      {app: 'chrome', time: '00:00:03' },
      {app: 'firefox', time: '00:00:02' },
    ]);
  });

  it('should return browser tab session time', () => {
    const monitor = new Monitor();
    const items = [
      {
        app: 'chrome',
        title: 'google Title'
      },
      {
        app: 'chrome',
        title: 'google Title2'
      },
      {
        app: 'firefox',
        title: 'Mozilla title 1'
      },
      {
        app: 'firefox',
        title: 'Mozilla title 1'
      },
      {
        app: 'firefox',
        title: 'Mozilla title 1'
      },
      {
        app: 'firefox',
        title: 'Mozilla title 2'
      },
      {
        app: 'chrome',
        title: 'google Title2'
      },
      {
        app: 'chrome',
        title: 'google Title2'
      },
      {
        app: 'visual code',
        title: 'Visual code'
      },
      {
        app: 'chrome',
        title: 'google Title2'
      },
      {
        app: 'visual code',
        title: 'Visual code'
      },
      {
        app: 'visual code',
        title: 'Visual code'
      },
      {
        app: 'firefox',
        title: 'Mozilla title 2'
      },
      {
        app: 'firefox',
        title: 'Mozilla title 2'
      },
      {
        app: 'firefox',
        title: 'Mozilla title 2'
      },
    ];

    monitor.setItems(items);
    const browsers = monitor.getBrowserTabTime();

    assert.deepEqual(browsers, [
      { app: 'chrome', title: 'google Title', time: '00:00:01' },
      { app: 'chrome', title: 'google Title2', time: '00:00:04' },
      { app: 'firefox', title: 'Mozilla title 1', time: '00:00:03' },
      { app: 'firefox', title: 'Mozilla title 2', time: '00:00:04' }
    ]);
  });
  
});