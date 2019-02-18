import { chart } from '@jkcfg/kubernetes/chart';
import std from '@jkcfg/std';

import resources from './resources';

const defaults = {
  name: 'helloworld',
  app: 'hello',
  image: {
    repository: 'weaveworks/helloworld',
    tag: 'v1'
  }
};

chart(resources, defaults, std.param);
