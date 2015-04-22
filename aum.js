import dispatch from 'aum-dispatch';
import listen from 'aum-listen';
import provide from 'aum-provide';

provide = provide();

listen('clear', function (e) {
  provide.clear(e.detail);
});

listen('config', function (e) {
  provide.config(e.detail);
});

listen('paint', function () {
  provide.paint();
});

listen('request', function (e) {
  e.detail.defer = new provide.Defer();

  provide.request(e.detail);
});

listen('route', function (e) {
  provide.route(e.detail);
});

listen('xhr', function (e) {
  provide.xhr(e.detail);
});

