import './styles/base.less';
import Alert from './Alert';
import AppBar from './AppBar';
import AutoComplete from './AutoComplete';
import Avatar from './Avatar';
import Badge from './Badge';
import BottomNav from './BottomNav';
import BottomSheet from './BottomSheet';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import Card from './Card';
import Carousel from './Carousel';
import Checkbox from './Checkbox';
import Chip from './Chip';
import DateInput from './DateInput';
import DataTable from './DataTable';
import Dialog from './Dialog';
import Divider from './Divider';
import Drawer from './Drawer';
import ExpansionPanel from './ExpansionPanel';
import Form from './Form';
import Grid from './Grid';
import GridList from './GridList';
import Helpers from './Helpers';
import Icon from './Icon';
import List from './List';
import LoadMore from './LoadMore';
import Menu from './Menu';
import Pagination from './Pagination';
import Paper from './Paper';
import Picker from './Picker';
import Popover from './Popover';
import Progress from './Progress';
import Radio from './Radio';
import Select from './Select';
import SlidePicker from './SlidePicker';
import Slider from './Slider';
import Snackbar from './Snackbar';
import Stepper from './Stepper';
import SubHeader from './SubHeader';
import Switch from './Switch';
import Tabs from './Tabs';
import TextField from './TextField';
import Tooltip from './Tooltip';
import './styles/theme.less';
import theme from './theme';
import * as Colors from './theme/colors';

function MuseUI (Vue) {
  [
    Alert, AppBar, AutoComplete, Avatar,
    Badge, BottomNav, BottomSheet, Breadcrumbs, Button,
    Card, Carousel, Checkbox, Chip,
    DataTable, DateInput, Dialog, Divider, Drawer,
    ExpansionPanel, Form, Grid, GridList, Helpers, Icon,
    LoadMore, List, Menu,
    Pagination, Paper, Picker, Popover, Progress, Radio,
    Select, SlidePicker, Slider, Snackbar, Stepper, SubHeader, Switch,
    Tabs, TextField, Tooltip
  ].forEach((component) => {
    Vue.use(component);
  });
}

MuseUI.theme = theme;
MuseUI.Colors = Colors;
MuseUI.version = 'v3.0.0';
if (typeof window !== 'undefined' && window.Vue) MuseUI(window.Vue);
export default MuseUI;
