import { Selector } from 'testcafe';

fixture('Bundle tests')
  .page('http://localhost:3000');

// I haven't covered everything, but you got the point.
// Full version should check that the images are present
// and links are clickable, etc.

test('Bundle test', async t => {
  await t
    .expect(Selector('h1').innerText)
    .eql(BUNDLE.title)
    .expect(byTestId('bundle-label').innerText)
    .eql(BUNDLE.label)
    .debug(); // This stops the run so that you can take a look
});

test('Bundle Items test', async t => {
  await t
    .expect(byTestId(BUNDLE.items[0].testId).find('h2').innerText)
    .eql(BUNDLE.items[0].title);
});

const BUNDLE_ITEM_A = {
  testId: 'BundleItem-4245471',
  title: 'Trijntje Oosterhuis onherkenbaar veel afgevallen',
};

const BUNDLE = {
  title: 'De uitschieters van 2018',
  label: 'BEST GELEZEN',
  items: [
    BUNDLE_ITEM_A,
  ],
}

function byTestId(testId) {
  return Selector(`[data-test-id="${testId}"]`);
}
