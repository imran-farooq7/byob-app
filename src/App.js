import React from 'react'
import BurgerBuilder from './Components/Containers/BurgerBuilder/BurgerBuilder'
import Layout from './Components/Layout/Layout'




function App() {
  return (
    <div>
     <Layout>
       <BurgerBuilder />
     </Layout>
    </div>
  );
}

export default App;
