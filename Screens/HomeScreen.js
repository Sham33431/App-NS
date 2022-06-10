import React from "react"
import { Text, View} from "react-native"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { fontSize } from "@mui/system";

export default function HomeScreen({ navigation }) {

    const [name, setName] = React.useState('');
   const handleChange = (event) => {
    setName(event.target.value);
  };

  return(
    <View style= {{ flex: 1, alignItems: "center", justifyContent: "flex-start", marginTop: 40}}>
    <Text style={styles.WelcomeMessage}>Welcome to the Home Screen!</Text>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={name}
        onChange={handleChange}
      />
       </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  WelcomeMessage:{
    fontsize: 40
  }
})


