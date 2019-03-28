#!/usr/bin/env node

/**
 * Module dependencies.
 */

const cli = require('commander');
const fs = require(fs);
const ver = process.env.ERRJS_VERSION || '1.0.0';
const cliErr = cliErr || {};

cliErr.update = (function(cliErr) {
  const start = () => {
    return true;
  };
  return {start};
})(cliErr, undefined);

cliErr.watch = (function(cliErr) {
  const start = () => {
    return true;
  };
  return {start};
})(cliErr, undefined);

cliErr.config = (function(cliErr) {
  const start = (file) => {
    if (file) return true;
    return false;
  };
  return {start};
})(cliErr, undefined);

cli
    .version(ver, '-v, --version')
    .option('-u, --update', 'Update filenames and line numbers')
    .option('-w, --watch', 'Watch for updates and edit on save')
    .option(
        '-c, --config [file]',
        'Provide a config file [./path/to/file.json]',
        './path/to/file.json'
    )
    .parse(process.argv);

if (cli.update) cliErr.update.start();
if (cli.watch) cliErr.watch.start();
if (cli.config) cliErr.config.start(cli.file);
