/**
 * @typedef {Object} DefaultConfig
 * @property {Object.<string, *>} [headers]
 * @property {Object.<string, object|ArrayBuffer>} [body]
 * @property {'json'|'text'|'document'|'buffer'} [contentType]
 */
const defaultConfig = {
  headers: { Authorization: myToken },
};

/**
 * @param {string} url
 * @param {DefaultConfig} params
 * @returns {Promise.<{
 *   json: Promise.<object>,
 *   text: Promise.<string>,
 *   document: Promise.<Document>,
 *   buffer: Promise.<ArrayBuffer>
 * }>}
 */
function post(url, params) {}

/**
 * @param {string} url
 * @param {DefaultConfig} params
 * @returns {Promise.<{
 *   json: Promise.<object>,
 *   text: Promise.<string>,
 *   document: Promise.<Document>,
 *   buffer: Promise.<ArrayBuffer>
 * }>}
 */
function put(url, params) {}
