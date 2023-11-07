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
    backgroundColor: '#055C9D',
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
    backgroundColor: "#0E86D4",
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
    fontSize: 30,
    color: '#3a3a3a',
  },
  mediumTitleText: {
    fontSize: 25,
    padding: 20,
    fontWeight: 'bold',
    color: '#3a3a3a',
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
    color: '#3a3a3a',
  },
  collapsibleContentContainer: {
    padding: 20,
  },
  collapsibleContent: {
    fontSize: 23,
    textAlign: 'left',
    color: '#3a3a3a',
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
  },
  playlist: {
    marginTop: 0,
    marginBottom: 0
  },
  playlistItem: {
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
    color: '#394a51',
  },
  trackProgress: {
    marginTop: 0,
    textAlign: 'center',
    fontSize: 24,
    color: '#000'
  },
  songTitle: {
    fontSize: 20,
    marginTop: 10,
    color: '#000'
  },
  artistName: {
    fontSize: 17,
    color: '#394a51'
  },
  days: {
    fontSize: 15,
    color: '#8f8787'
  },
  playerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  backgroundImage: {
    flex: 1,
  },
});

export default styles;
