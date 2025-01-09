import {expect, fixture, html} from '@open-wc/testing';
import {HelloWorldComponent} from './hello-world.component';
suite('hello-world.component tests', () => {
  test('fixture instantiation', async () => {
    const el = await fixture(html`<hello-world></hello-world> `);
    expect(el).not.to.equal(null);
    expect(el).to.be.instanceOf(HelloWorldComponent);
  });
});
