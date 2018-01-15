module.exports = function pageId (ctx) {
  return ctx.resourcePath.replace(/[\\\/]+/g, '/').replace(`${ctx.options.context.replace(/[\\\/]+/g, '/')}/`, '').replace(/(.*)?(\..+?$)/, '$1').replace(new RegExp(`(?:${getSpikeOptions(ctx).dumpDirs.join('|')})/`), '').replace(/\//g, '-')
}

function getSpikeOptions (ctx) {
  return ctx.options.plugins.find((p) => p.name === 'spikePlugin').options
}
