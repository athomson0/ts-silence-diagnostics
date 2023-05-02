import * as ts from 'typescript/lib/tsserverlibrary';

function init() {
  function create(info: ts.server.PluginCreateInfo) {
    const config = info.config || {};
    const ignoredCodes = Array.isArray(config.ignoredCodes) ? config.ignoredCodes : [0];

    const proxy: ts.LanguageService = Object.create(null);

    for (const key of Object.keys(info.languageService) as Array<keyof ts.LanguageService>) {
      const fn = info.languageService[key] as (...args: any[]) => any;
      proxy[key] = function (...args: any[]) {
        return fn.apply(info.languageService, args);
      };
    }

    proxy.getSemanticDiagnostics = function (fileName: string): ts.Diagnostic[] {
        return info.languageService.getSemanticDiagnostics(fileName).filter(
          diagnostic => !ignoredCodes.includes(diagnostic.code)
        );
    };

    return proxy;
  }

  return { create };
}

export = init;
``
