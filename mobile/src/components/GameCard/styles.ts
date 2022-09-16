import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 12,
  },
  cover: {
    width: 240, 
    height: 320,
    justifyContent: 'flex-end',
    borderRadius: 8,
    overflow: 'hidden',
  },
  footer: {
    width: '100%',
    height: 120,
    padding: 16,
    justifyContent: 'flex-end',
  },
  name: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD
  }, 
  ads:{
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  }
});