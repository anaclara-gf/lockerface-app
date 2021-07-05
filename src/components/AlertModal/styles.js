import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modal: {
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.orange,
        borderWidth: 3,
        alignItems: "center",
        shadowColor: "#FFF",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        elevation: 5,
        padding: 10,
      },
      content: {
          padding: 25,
          justifyContent: 'space-between',
          alignItems: 'center',
      },
      contentText: {
        width: 280,
        fontFamily: theme.fonts.text400,
        color: theme.colors.orange,
        fontSize: 18,
        marginTop: 15,
        textAlign: 'center'
      },
      closeButton: {
        backgroundColor: theme.colors.orange,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 20,
      },
      closeButtonText: {
          fontFamily: theme.fonts.title700,
          color: theme.colors.white,
          fontSize: 18,
      },
})