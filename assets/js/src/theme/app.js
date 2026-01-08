import init from './init';
import { UI } from './ui';
import './forms.js';
//import './privacy-policy.js';
import './surveys.js';
import './ajax/toll-free-numbers.js';
import './ajax/phone-number-validation.js';
import './ajax/surveys-submit.js';
import './ajax/plugins-reload.js';
//import './ajax/landings-lazy-loading.js';

__webpack_public_path__ = window['_root'];

export const App = () => {
  UI();
  init();
};
if (typeof window._loq == 'undefined') {
  window._loq = { push: (arg = false, arg2 = false, arg3 = false) => {} };
}

App();
