# TestRail Reporter for Cypress

Publishes [Cypress](https://www.cypress.io/) runs on TestRail.

## Install

run the following in the project directory:
```shell
$ npm run build && npm link
```
then run the following in the project that you want to use the reporter in:
```shell
$ npm link auga-cypress-testrail-reporter
```

## Usage

Add reporter to your `cypress.json`:

```json
...
"reporter": "auga-cypress-testrail-reporter",
"reporterOptions": {
  "domain": "yourdomain.testrail.com",
  "username": "username",
  "password": "password",
  "projectId": 1,
  "suiteId": 1,
}
```

Your Cypress tests should include the ID of your TestRail test case. Make sure your test case IDs are distinct from your test titles:

```Javascript
// Good:
it("C123 C124 Can authenticate a valid user", ...
it("Can authenticate a valid user C321", ...

// Bad:
it("C123Can authenticate a valid user", ...
it("Can authenticate a valid userC123", ...
```

## Reporter Options

**domain**: _string_ domain name of your TestRail instance (e.g. for a hosted instance _instance.testrail.com_).

**username**: _string_ email of the user under which the test run will be created.

**password**: _string_ password or the API key for the aforementioned user.

**projectId**: _number_ project with which the tests are associated.

**suiteId**: _number_ suite with which the tests are associated.

**runName**: _string_ (optional) name of the Testrail run.

**runId**: _number_ (optional) ID of an existing Testrail run.

## TestRail Settings

To increase security, the TestRail team suggests using an API key instead of a password. You can see how to generate an API key [here](http://docs.gurock.com/testrail-api2/accessing#username_and_api_key).

If you maintain your own TestRail instance on your own server, it is recommended to [enable HTTPS for your TestRail installation](http://docs.gurock.com/testrail-admin/admin-securing#using_https).

For TestRail hosted accounts maintained by [Gurock](http://www.gurock.com/), all accounts will automatically use HTTPS.

You can read the whole TestRail documentation [here](http://docs.gurock.com/).

## Author

Glenn Johansson - [github](https://github.com/glenn-johansson)

## License

This project is licensed under the [MIT license](/LICENSE.md).

## Acknowledgments

* [Milutin Savovic ](https://github.com/mickosav), owner of the [cypress-testrail-reporter](https://github.com/Vivify-Ideas/cypress-testrail-reporter) repository that was forked.
* [Pierre Awaragi](https://github.com/awaragi), owner of the [mocha-testrail-reporter](https://github.com/awaragi/mocha-testrail-reporter) repository that was forked.
* [Valerie Thoma](https://github.com/ValerieThoma) and [Aileen Santos](https://github.com/asantos3026) for proofreading the README.md file and making it more understandable.
