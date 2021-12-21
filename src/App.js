import './App.css';
import {
  Switch,
  Route,
  // Redirect
} from "react-router-dom";
import { ascAboutPage, ascAppointmentPage, ascContactPage, ascCovidCarePage, ascHomePage, ascLabTestPage, ascLoginPage, ascMedicinePage, ascVideoConsultPage } from './components/App/ayncComponent';
import { Suspense } from 'react';
import PublicRoute from './route/PublicRoute';
import PageNotFound from './components/PageNotFound'

function App() {
  
  return (
    <Suspense 
      fallback={
        <div className='fallback-container'>
        <img src="./images/logo1.png" alt="" />
        </div>
      }
    >
      <div className="App">
        <Switch>
        
          {/* <Route path='/' exact component={ascHomePage}>
          </Route>
          <Route path='/about' exact component={ascAboutPage}>
          </Route>
          <Route path='/contactus' exact component={ascContactPage}>
          </Route>
          <Route path='/covidcare' exact component={ascCovidCarePage}>
          </Route>
          <Route path='/videoconsult' exact component={ascVideoConsultPage}>
          </Route>
          <Route path='/labtest' exact component={ascLabTestPage}>
          </Route>
          <Route path='/medicine' exact component={ascMedicinePage}>
          </Route>
          <Route path='/appointment' exact component={ascAppointmentPage}>
          </Route>
          <Route path='/login' exact component={ascLoginPage}>
          </Route> */}
          
          {/* <PublicRoute 
            exact
            path='/'
            component={ascHomePage}
          />  */}

          <PublicRoute path='/' exact component={ascHomePage}>
          </PublicRoute>
          <PublicRoute path='/about' exact component={ascAboutPage}>
          </PublicRoute>
          <PublicRoute path='/contactus' exact component={ascContactPage}>
          </PublicRoute>
          <PublicRoute path='/covidcare' exact component={ascCovidCarePage}>
          </PublicRoute>
          <PublicRoute path='/videoconsult' exact component={ascVideoConsultPage}>
          </PublicRoute>
          <PublicRoute path='/labtest' exact component={ascLabTestPage}>
          </PublicRoute>
          <PublicRoute path='/medicine' exact component={ascMedicinePage}>
          </PublicRoute>
          <PublicRoute path='/appointment' exact component={ascAppointmentPage}>
          </PublicRoute>
          <PublicRoute path='/login' exact component={ascLoginPage}>
          </PublicRoute>
          <Route  component={PageNotFound}>
          </Route>
          
        </Switch>
        
      </div>
      </Suspense>
  );
}

export default App;
