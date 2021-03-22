"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULTSTART = exports.DEFAULTAPP = exports.DEFAULTPORT = exports.DEFAULTBOOTSTRAP = void 0;
exports.DEFAULTBOOTSTRAP = "#!/usr/bin/env bash\n\nexport PORT={port}\nexport DEFAULTAPP={app}\n{start}";
exports.DEFAULTPORT = 9000;
exports.DEFAULTAPP = 'server.py';
exports.DEFAULTSTART = 'python $DEFAULTAPP';
//# sourceMappingURL=bootstrap.js.map