'use strict';

const File = require('./file');
const Directory = require('./directory');
const SymbolicLink = require('./symlink');

/**
 * A directory entry
 * @constructor
 *
 * @param {string} name
 * @param {Item} item
 */
function Dirent(name, item) {
  this.name = name;
  this._item = item;
}

Dirent.prototype.isFile = function() {
  return this._item instanceof File;
};
Dirent.prototype.isDirectory = function() {
  return this._item instanceof Directory;
};
Dirent.prototype.isBlockDevice = function() {
  return false;
};
Dirent.prototype.isCharacterDevice = function() {
  return false;
};
Dirent.prototype.isSymbolicLink = function() {
  return this._item instanceof SymbolicLink;
};
Dirent.prototype.isFIFO = function() {
  return false;
};
Dirent.prototype.isSocket = function() {
  return false;
};

/**
 * Export the constructor.
 * @type {function()}
 */
exports = module.exports = Dirent;
