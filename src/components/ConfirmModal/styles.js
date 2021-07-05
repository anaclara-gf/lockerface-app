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
        width: 300,
        fontFamily: theme.fonts.text400,
        color: theme.colors.orange,
        fontSize: 18,
        marginTop: 15,
        textAlign: 'center'
      },
      buttons: {
        flexDirection: 'row',
        width: 280,
        justifyContent: 'space-between',
      },
      confirmButton: {
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.orange,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 20,
      },
      confirmButtonText: {
          fontFamily: theme.fonts.title700,
          color: theme.colors.white,
          fontSize: 18,
      },
      editButton: {
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        borderColor: theme.colors.orange,
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 20,
      },
      editButtonText: {
          fontFamily: theme.fonts.title700,
          color: theme.colors.orange,
          fontSize: 18,
      },
      loadingContainer: {
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        borderColor: theme.colors.orange,
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 20,
    },
})