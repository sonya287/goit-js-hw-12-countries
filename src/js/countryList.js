import fethCountry from './fetchCountry';
import notice from './notice';
import refs from './refs';
import list from '../templates/list.hbs';
import coutry from '../templates/coutry.hbs';

const renderCountryList = function (val) {
  refs.countryList.innerHTML = list(val);
};
const renderCountry = function (val) {
  refs.countryList.innerHTML = coutry(val);
};
const resetCountryList = function () {
  refs.countryList.innerHTML = '';
};

export default function (evt) {
  fethCountry(evt.target.value)
    .then(response => {
      if (response.length > 10) {
        resetCountryList();
        notice.noticeError();
      } else if (response.length >= 2 && response.length <= 10) {
        notice.noticeInfo();
        renderCountryList(response);
      } else {
        notice.noticeSuccess();
        renderCountry(response);
      }
    })
    .catch(() => {
      notice.valueError();
      resetCountryList();
    });
}