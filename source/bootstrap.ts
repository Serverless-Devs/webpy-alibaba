export const DEFAULTBOOTSTRAP = `#!/usr/bin/env bash

export PORT={port}
export DEFAULTAPP={app}
{start}`;

export const DEFAULTPORT = 9000;
export const DEFAULTAPP = 'server.py';
export const DEFAULTSTART = 'python $DEFAULTAPP';