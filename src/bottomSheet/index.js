import '../styles/components/bottom-sheet.less';
import BottomSheet from './BottomSheet';

BottomSheet.install = function (Vue) {
  Vue.component(BottomSheet.name, BottomSheet);
};

export default BottomSheet;
