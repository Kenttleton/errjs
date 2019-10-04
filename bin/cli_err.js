#!/usr/bin/env node

/**
 * Module dependencies.
 */

const NODE_ENV = 'development';
const cli = require('commander');
const fs = require('fs');
const watch = require('node-watch');

const cliErr = {};
cliErr.update = (function(cliErr) {
    const start = (fileOrDir) => {
        return true;
    };
    const file = (f) => {
        return true;
    };
    const directory = (dir) => {
        return true;
    };
    return {start, file, directory};
})(cliErr, undefined);

cliErr.watch = (function(cliErr) {
    const start = (file) => {
        const log = console.log.bind(console);
        if (!file) file = '../';

        const watcher = watch(file, {
            recursive: true,
            filter: /\.js$/,
        });

        watcher
            .on('ready', () => {
                log(`[${NODE_ENV}] Watching Files for Changes...`);
            })
            .on('change', (event, filename) => {
                const filepath = filename.replace(/\\/g, '/');
                cliErr.update.file(filepath);
                log(`${event} occurred on ${filename}`);
            })
            .on('error', (error) => {
                log(error);
            });
    };
    return {start};
})(cliErr, undefined);

cliErr.config = (function(cliErr) {
    const base = require('../bin/cliErr.conf.json');
    const start = (file) => {
        updateConfig(file);
    };
    const check = () => {
        return base.override;
    };
    const reset = () => {
        cliErr.JSON.package.version = packageJSON.version;
    };
    const updateConfig = (file) => {
        if (file) {
            fs.copyFile(file, __dirname + 'override-conf.json', (err) => {
                if (err) throw err;
                updatePackage(true);

                console.log('Configuration Updated!');
            });
            updatePackage(false);
            return true;
        }
    };
    const updatePackage = (override) => {
        if (override) {
            useOverride = true;
        }
        const packageJSON = require('../package.json');
        base.package.version = packageJSON.version;
    };
    return {start, reset, base, check};
})(cliErr, undefined);

cli
    .version(cliErr.config.base.package.version, '-v, --version')
    .option('-u, --update', 'Update filenames and line numbers')
    .option('-w, --watch', 'Watch for updates and edit on save')
    .option('-r, --reset', 'Reset config to default')
    .option(
        '-c, --config [file]',
        'Provide a config file [./path/to/file.json]',
        './path/to/file.json'
    )
    .parse(process.argv);

if (cli.version) cliErr.config.start();
if (cli.update) cliErr.update.start();
if (cli.watch) cliErr.watch.start();
if (cli.config) cliErr.config.start(cli.file);
if (cli.reset) cliErr.config.reset();
