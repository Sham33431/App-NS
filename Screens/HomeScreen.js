import React, {useState} from "react"
import { Text, View} from "react-native"
import { TextInput} from "react-native-paper";
import Icon from 'react-native-vector-icons/AntDesign';
import "./styles.css"

export default function HomeScreen({}) {

  const [test, setTest] = React.useState("");
  const [TextInput1, setValue] = React.useState("");
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false)
  
   const handleChange = (event) => {
    setValue(event.target.value);
   };

   let Info= TextInput1

   const handleImageChange = (e) => {
     const selected = e.target.files[0];
     const ALLOWED_TYPES=["image/png", "image/jpeg", "image/jpg"];
     if(selected && ALLOWED_TYPES.includes(selected/type)) {
      let reader= new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result)
        setimgPreview(selected);
      }
      reader.readAsDataURL (selected);

     } else {
       setError(true);
       
     }
   }

  /*pretty sure that the name will not save*/
  return(
    <View style= {{ flex: 1, alignItems: "center", justifyContent: "flex-start", marginTop: 40}}>
    <Text style={{ fontSize: 30}}>Welcome to the Home Screen!</Text>
    <Text style={{ fontSize: 30, paddingBottom:15}}>{Info.toString()}</Text>
    <Text style={{ fontSize: 15, color: "grey" }}>please key in your name</Text>
  
    <View>
    <TextInput
        id="outlined-name"
        label="Name"
        value={TextInput1}
        onChange={handleChange}
      
      /> 
    <Icon.Button
         name="check" 
         onPress={() => {setTest(test)}}>
           <Text style={{AlignLeft: 50, fontSize: 15, color: "white"}}>
             Confirm 
           </Text>
    </Icon.Button>
      </View>

      <div className = "APP"/>
        <div className= "Container">
          {error && <p className= "errorMsg">File not supported</p>}
          <div 
          className="imgPreview"
          style= {{background: imgPreview ? `url("${imgPreview}") no-repeat center/cover`
          : "#808080" 
  }}
          >
            {!imgPreview && (
            <> 
              <p>Add an image</p>
              <label htmlFor="fileUpload" className="customFileUpload">Choose File
              </label>
              <input type="file" id="fileUpload" onChange={handleImageChange} />
              <span>(jpg, jpeg or png)</span>
              </>
            )}
            <div>
              {imgPreview &&(
                <button onClick={() =>setImgPreview(null)}>Remove Image</button>
            )}
            </div>
          </div>
        </div>
    </View>
  );
}


