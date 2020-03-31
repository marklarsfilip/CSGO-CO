// Colors
const primary = '#33333D';
const primaryVariant = '#484851';

const secondary = '#1EB980';
const secondaryVariant = '#37EFBA';
const white = '#fff';
const black = '#000000';

// Components
import menu from './components/menu/menu';
import topBar from './components/topbar/topbar';

// Scenes
import home from './scenes/home/home';

export default {
  colors: {
    primary,
    primaryVariant,
    secondary,
    secondaryVariant,
    white,
    black,
  },
  components: {
    menu,
    topBar,
  },
  scenes: {
    home,
  }
};
