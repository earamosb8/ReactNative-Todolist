import React,{useState} from 'react';
import { View ,Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, TouchableOpacityBase} from 'react-native';
import Task from './components/Task';


function App(){
  const [task,setTask] = useState();
  const [taskItems, setTaskItems] = useState([])
  const handleAddTask = () =>{
    /*oculta el teclado una vez se haya ingresado el texto*/
    Keyboard.dismiss()
    if (task){
      setTaskItems([...taskItems, task])
      setTask(null)
    }
    console.log(taskItems)
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }
  return(
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Today's tasks
        </Text>
        <View style={styles.items}>
          {
          taskItems.map((item,index) =>{
            return(
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task  text={item}/>
            </TouchableOpacity>
           
          )
        })
      } 

        </View>
      </View>
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text =>setTask(text)}></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>

  
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight: 'bold',
    color:'black',
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:15,
   
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor: '#C0C0C0',
    borderWidth:1,
    width:250,
    color:'black',
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
    marginRight:30,
  },
  addText:{
    color:'black'
  }
});

export default App;
