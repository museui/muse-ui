export * from './muse-ui';

import * as MuseUI from './muse-ui';
export default MuseUI;

declare module './muse-ui/lib/theme' {
  import * as MuseUI from './muse-ui';
  export default MuseUI.theme;
}

declare module './muse-ui/lib/theme/colors' {
  import * as MuseUI from './muse-ui';
  export default MuseUI.Colors;
}
