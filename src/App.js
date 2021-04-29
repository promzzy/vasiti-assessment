import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './component/pageLayout/Layout'
import TestimonialPage from './pages/Testimonial'
import ShareTestimonialForm from './component/testimonial/ShareTestimonialForm'
function App() {
  return (


    <Router>
    <Layout>
<Route exact path="/">
      <TestimonialPage />
 </Route>

 <Route path="/testimonial/form">
   <ShareTestimonialForm />
 </Route>

    </Layout>
    </Router>
  );
}

export default App;
