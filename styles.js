import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#fff'
  },
  footerTextLink: {
    color: '#F4E869',
  },
  mainBg: {
    backgroundColor: '#2E4374',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#6499E9",
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 12
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  headButtonContainer: {
    elevation: 8,
    backgroundColor: "#6499E9",
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 12
  },
  headButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  section: {
    marginBottom: 10,
  },
  misteryoButton: {
    width: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeTitleText: {
    fontSize: 30
  },
  mediumTitleText: {
    fontSize: 25,
    padding: 20,
    fontWeight: 'bold'
  },
  scrollContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 250,
    alignSelf: 'center',
  justifyContent: 'center',
  },
  collapsibleHeader: {
    backgroundColor: '#eee',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  fullWidthHeader: {
    width: '100%', 
  },
  collapsibleTitleBackground: {
    backgroundColor: '#FAF2D3',
  },
  collapsibleTitle: {
    fontSize: 25,
  },
  collapsibleContentContainer: {
    padding: 20,
  },
  collapsibleContent: {
    fontSize: 23,
    textAlign: 'justify',
  },
  textCenter: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  audioPlayerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioControlButton: {
    width: 40,
    height: 40,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  audioStateText: {
    paddingBottom: 10
  }
});

export default styles;
