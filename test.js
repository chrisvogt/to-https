import test from 'ava';
import toHttps from '.';

test('input validation', t => {
  const err = t.throws(() => {
    toHttps(123);
  }, TypeError);
  t.is(err.message, 'Expected a string, got number');
});

test('https urls are returned as-is', t => {
  t.is(toHttps('https://www.chrisvogt.me'), 'https://www.chrisvogt.me');
});

test('converting http urls to https', t => {
  t.is(toHttps('http://www.chrisvogt.me'), 'https://www.chrisvogt.me');
});

test('converting ftp addresses to https', t => {
  t.is(toHttps('ftp://chrisvogt.me/file-1.zip'), 'https://chrisvogt.me/file-1.zip');
});

test('converting protocol relative urls to https', t => {
  t.is(toHttps('//www.chrisvogt.me'), 'https://www.chrisvogt.me');
});

test('converting IP addresses to https', t => {
  t.is(toHttps('127.0.0.1'), 'https://127.0.0.1');
});
