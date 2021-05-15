import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config';

 
export default class WriteStoryScreen extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

  submitStory=()=>{
     console.log("I am in submit button")
     console.log (db.collections("stories"))
    db.collections("stories").add({
      title:this.state.title,
      author:this.state.author,
      storyText:this.state.storyText
          })
         

          this.setState({
            title: '',
            author: '',
            storyText: '',
          })
  }
    render(){
        return(
            <View style={styles.container}>
                <Header 

                    backgroundColor = {'#00adb5'}
                    centerComponent = {{
                        text : 'Story Hub',
                        style : { color: 'black', fontSize: 30,     fontFamily: 'Times New Roman' }
                    }}
                />
                <TextInput 
                    placeholder="Story Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}
                    placeholderTextColor='black'/>
                <TextInput
                    placeholder="Author"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitStory}
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 6,



  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
       padding: 6,
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10, 
      padding: 6,
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#00adb5',
      width: 80,
      height: 40,color:'black',
     
  },
  buttonText: {
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
     fontFamily: 'Times New Roman'
  }
});