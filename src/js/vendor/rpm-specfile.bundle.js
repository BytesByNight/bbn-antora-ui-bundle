/**
 * highlight.js RPM spec file syntax highlighting definition
 *
 * @see https://github.com/highlightjs/highlight.js
 *
 * @package  highlightjs-rpm-specfile
 * @author   Ryan Lerch <rlerch@redhat.com>, Neal Gompa <ngompa13@gmail.com>
 * @since    2019-07-08
 * @license  magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 *
 * Language: rpm-specfile
 * Description: RPM Specfile
 * Author: Ryan Lerch <rlerch@redhat.com>
 * Contributors: Neal Gompa <ngompa13@gmail.com>
 * Category: config
 * Requires: bash.js
 * Website: https://rpm.org/
 **/

function hljsDefineRpmSpecfile (hljs) {
  return {
    name: 'rpm-specfile',
    aliases: ['rpm', 'spec', 'rpm-spec', 'specfile'],
    contains: [
      hljs.COMMENT('%dnl'),
      hljs.HASH_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'type',
        // eslint-disable-next-line max-len
        begin: /^(Name|BuildRequires|BuildConflicts|Version|Release|Epoch|Summary|Group|License|Packager|Vendor|Icon|URL|Distribution|Prefix|Patch[0-9]*|Source[0-9]*|Requires\(?[a-z]*\)?|[a-zA-Z]+Req|Obsoletes|Recommends|Suggests|Supplements|Enhances|Provides|Conflicts|RemovePathPostfixes|Build[a-zA-Z]+|[a-zA-Z]+Arch|Auto[a-zA-Z]+)(:)/,
      },
      {
        className: 'keyword',
        // eslint-disable-next-line max-len
        begin: /(%)(?:package|prep|generate_buildrequires|sourcelist|patchlist|build|description|install|verifyscript|clean|changelog|check|pre[a-z]*|post[a-z]*|trigger[a-z]*|files)/,
      },
      {
        className: 'link',
        begin: /(%)(ifarch|ifnarch|ifos|ifnos|if|elifarch|elifos|elif|else|endif)/,
      },
      {
        className: 'link',
        begin: /%\{_/,
        end: /}/,
      },
      {
        className: 'symbol',
        begin: /%\{\?/,
        end: /}/,
      },
      {
        className: 'link font-weight-bold',
        begin: /%\{/,
        end: /}/,
      },
      {
        className: 'link font-weight-bold',
        begin: /%/,
        end: /[ \t\n]/,
      },
      {
        className: 'symbol font-weight-bold',
        begin: /^\* (Mon|Tue|Wed|Thu|Fri|Sat|Sun)/,
        end: /$/,
      },
    ],
  }
}

module.exports = function (hljs) {
  hljs.registerLanguage('rpm-specfile', hljsDefineRpmSpecfile)
}

module.exports.definer = hljsDefineRpmSpecfile

/* @license-end */
