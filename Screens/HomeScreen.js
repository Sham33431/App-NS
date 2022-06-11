import React from "react"
import { Text, View} from "react-native"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { TextInput } from "react-native-web";



export default function HomeScreen({}) {

  const [selected, setSelected] = React.useState(false);

  const [Info, setValue] = React.useState("");
  
   const handleChange = (event) => {
    setValue(event.target.value);
   };

   SQLite.enablePromise(true);

   const db = SQLite.openDatabase("Name.db");



  /*pretty sure that the name will not save*/
  return(
    <View style= {{ flex: 1, alignItems: "center", justifyContent: "flex-start", marginTop: 40}}>
    <Text style={{ fontSize: 30, paddingBottom:15}}>Welcome to the Home Screen!</Text>
    <Text style={{ fontSize: 15, color: "grey" }}>please key in your name</Text>
    <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={Info}
        onChange={handleChange}
      /> 
            <ToggleButton style={{width: 50 }}
      value="check"
      selected={selected}
      onChange= {() => {
        setSelected(!selected)
      }}
    >
      <CheckIcon />
    </ToggleButton>

    </Box>
    </View>
  );
}
