import { test, expect } from 'vitest';
import toHttps from './index.js';

test('input validation', () => {
  expect(() => {
    toHttps(123);
  }).toThrowError(new TypeError('Expected a string, got number'));
});

test('empty string returns https://', () => {
  expect(toHttps('')).toBe('https://');
});

test('https urls are returned as-is', () => {
  expect(toHttps('https://www.chrisvogt.me')).toBe('https://www.chrisvogt.me');
});

test('converting http urls to https', () => {
  expect(toHttps('http://www.chrisvogt.me')).toBe('https://www.chrisvogt.me');
});

test('uppercase scheme is handled', () => {
  expect(toHttps('HTTP://example.com')).toBe('https://example.com');
});

test('converting ftp addresses to https', () => {
  expect(toHttps('ftp://chrisvogt.me/file-1.zip')).toBe(
    'https://chrisvogt.me/file-1.zip',
  );
});

test('http URL with port is converted', () => {
  expect(toHttps('http://example.com:8080')).toBe('https://example.com:8080');
});

test('ftp with trailing slash is preserved', () => {
  expect(toHttps('ftp://example.com/')).toBe('https://example.com/');
});

test('converting protocol relative urls to https', () => {
  expect(toHttps('//www.chrisvogt.me')).toBe('https://www.chrisvogt.me');
});

test('converting IP addresses to https', () => {
  expect(toHttps('127.0.0.1')).toBe('https://127.0.0.1');
});

test('converting bare domain names to https', () => {
  expect(toHttps('chrisvogt.me')).toBe('https://chrisvogt.me');
});

test('converting bare domain names with a path to https', () => {
  expect(toHttps('chrisvogt.me/photos')).toBe('https://chrisvogt.me/photos');
});

test('http URL with query and fragment is converted', () => {
  expect(toHttps('http://example.com/page?foo=1#section')).toBe(
    'https://example.com/page?foo=1#section',
  );
});

test('converting punycode domain to https', () => {
  expect(toHttps('http://xn--fsq.com')).toBe('https://xn--fsq.com');
});
