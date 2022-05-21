import { getFingerprint } from './src';

const $ = (selector: string) => document.querySelector(selector);
const $app = $('#app');

$app.innerHTML = `Your Fingerprint: ${getFingerprint()}`;
