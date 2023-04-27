import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


// JSX: in this App component we will call our own component as JSX 
function App() {
  return (
    <div className="App">

      {/* set JSX for display data in the UI */}
      <LoadPosts></LoadPosts>
    
    </div>
  );
}

//  some step of showing data in UI from API
// 1. declare a state
// 2. DECLARE a useEffect 
// 3. use fetch for load data from API
// 4. set data in the state. set data dynamically by mapped 





// create a components for loadData from API. In the component function the function name will always start with capital letter
function LoadPosts(){

  // 1.
  // bellow we declare a state . the initial value we set empty array bcz the data is a array ob object. and we set posts as a variable because we will show posts in the UI
  const [posts, setPosts] = useState([]);


// 2.
  // in the bellow we declare useEffect for loadData after showing in UI by useState. the useEffect function will takes two parameter. First one will be anonymous arrow function . Second one will be empty array in the 80-90% case. Inside the useEffect function we will fetch API and will set our data from useState 
  useEffect(()=>{



// 3. loaded data by fetch API
//4. set data in the useState by called that function  in fetch which is set in the useState.
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])



  return (
    <div>
      <h1>Posts: {posts.length}</h1>

      {/* we will mapped the Data bcz data of API is array of object . This mapped will set inside the dynamic components */}
      
{/* 5 show data dynamically */}
      {
        posts.map(post => <DisplayPost
           title={post.title}
           body={post.body}
        ></DisplayPost>)
      }


    </div>
  )
}


// this components for display post in the UI by set as JSX . It will take take props as parameter for set data in UI.
function DisplayPost(props){
return(
  <div style={{backgroundColor:'lightsalmon', margin:'20px', padding:'20px', borderRadius: '25px', border: '2px solid tomato'}}>
    <h3>Title: {props.title}</h3>
    <p>Body : {props.body} </p>
  </div>
)
}

