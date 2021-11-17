// styles
import './App.css';
import { useState } from 'react';
import Welcome from './Welcome';

// images
import a from './assets/3mxdn.png';
import b from './assets/4gb3f.png';
import c from './assets/5expp.png';
import d from './assets/7dyww.png';
import e from './assets/bwmee.png';
import f from './assets/cgcgb.png';
import g from './assets/geyn5.png';
import h from './assets/m6n4x.png';
import i from './assets/ng46m.png';

function App() {
   // stfu I know it's scuffed asf
   const harcodedData = [
      {
         img: a,
         label: "3mxdn"
      },
      {
         img: b,
         label: "4gb3f"
      },
      {
         img: c,
         label: "5expp"
      },
      {
         img: d,
         label: "7dyww"
      },
      {
         img: e,
         label: "bwmee"
      },
      {
         img: f,
         label: "cgcgb" 
      },
      {
         img: g,
         label: "geyn5"
      },
      {
         img: h,
         label: "m6n4x"
      },
      {
         img: i,
         label: "ng46m"
      }
   ];
   let obj = harcodedData[Math.floor((Math.random()*9) + 0)];

   // state
   const [img, setImg] = useState(obj.img);
   const [label, setLabel] = useState(obj.label);
   const [text, setText] = useState('');
   const [auth, setAuth] = useState(false);

   // handle the submition of the form
   const handleSubmit = () => {
      if (label === text) {
         setAuth(true);
      }
      else {
         window.location.reload(false);
      }
   }

   // conditional rendering
   if (auth) {
      return (
         <Welcome/>
      );
   }
   else {
      return (
         <div class="App">
            <h1>CAPTCHA Test</h1>
            <img src={img} alt="..."/>
            <hr class="sep"/>
            <input
               type="text"
               value={text}
               onChange={(e) => setText(e.target.value)}
               placeholder="Enter guess..."
            />
            <button class="submit" onClick={handleSubmit}>Submit</button>
         </div>
      );
   }
}

export default App;
