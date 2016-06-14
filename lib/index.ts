import { FuncTarget, MixinTarget } from './targets';

export default class Sasspec {

  filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  func(name): FuncTarget {
    return new FuncTarget(this.filePath, name);
  }

  mixin(name): MixinTarget {
    return new MixinTarget(this.filePath, name);
  }

}
