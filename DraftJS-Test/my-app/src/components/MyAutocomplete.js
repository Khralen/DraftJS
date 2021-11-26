import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import ReactDOM from 'react-dom';
import { finished } from 'stream';
import Data from "../sampleData/sample1.json"
import SavedData from "../sampleData/savedData.json"

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const CustAutoComplete = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    /*
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
    */
/*
    const DeleayComponent = () => {
      const [show, setShow] = React.useState(false)
    
      React.useEffect(() => {
        const timeout = setTimeout(() => {
          setShow(true)
        }, 5000)
    
        return () => clearTimeout(timeout)
    
      }, [show])
    
      if (!show) return null
    
      return
    };
    */

   if (searchText = "s") {
    setOptions(
      [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
      
    );
    return
   }
   setOptions( [], );
    return
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  const saveDataToFile = (data) => {
    const x = SavedData
    console.log("Data saved: ", x)
    
    const fs = require('fs') 
    data = () => {
        const jsonData = JSON.stringify(data, null, 2)
        fs.writeFile(data, jsonData, finished)
        
        console.log("Data saved..")
    };
    
    //saveData(data)
  };
 
  return (
    <>
      
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
      <button onClick={saveDataToFile}>Save</button>
      <br />
      <br />
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
      {
        Data.map(post => {
          return(
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          )
        })
      }
    </>
  );
};

ReactDOM.render(<CustAutoComplete />, document.getElementById('root'));
  
export default CustAutoComplete;