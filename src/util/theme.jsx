import {
    deepPurple500, deepPurple700, deepPurple50, amberA200
} from 'material-ui/styles/colors';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const theme = Object.assign({}, baseTheme);
Object.assign(theme.palette, {
    primary1Color: deepPurple500,
    primary2Color: deepPurple700,
    primary3Color: deepPurple50,
    accent1Color: amberA200
})

export default theme;