import FuncTarget from './FuncTarget';
import StandAloneMixinTarget from './StandAloneMixinTarget';
import IncludedMixinTarget from './IncludedMixinTarget';

export default class Sasspec {

  filePath: string;

  constructor(filePath: string) {
    console.log('filePath', filePath);
    this.filePath = filePath;
  }

  func(name): FuncTarget {
    return new FuncTarget(this.filePath, name);
  }

  standAloneMixin(name): StandAloneMixinTarget {
    return new StandAloneMixinTarget(this.filePath, name);
  }

  includedMixin(name): IncludedMixinTarget {
    return new IncludedMixinTarget(this.filePath, name);
  }

}
