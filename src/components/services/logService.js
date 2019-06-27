import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://a55ba4d951b143308f9d9ab035339013@sentry.io/1486333"
  });
}

function log(error){
    Sentry.captureException("Unexpected error", error);
}

export default{
    init,
    log
}
