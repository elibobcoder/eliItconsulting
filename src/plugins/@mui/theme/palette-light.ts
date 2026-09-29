import { alpha, PaletteOptions } from '@mui/material'
import { grey, common } from '@mui/material/colors'

const palette: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#f5f5f9',
    paper: common.white,
  },
  text: {
    primary: '#151A23',
    secondary: '#4B5563',
    disabled: grey[500],
  },
  divider: alpha('#000', 0.1),
}

export default palette
