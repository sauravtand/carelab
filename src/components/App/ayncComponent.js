import { lazy } from "react";
import pMinDelay from 'p-min-delay';

export const ascHomePage = lazy(()=> pMinDelay(import('../../containers/HomePageContainer'), 2000));

export const ascAboutPage = lazy(()=> pMinDelay(import('../../containers/AboutPageContainer'), 2000));
export const ascContactPage = lazy(()=> pMinDelay(import('../../containers/ContactUsContainer'), 2000));
export const ascCovidCarePage = lazy(()=> pMinDelay(import('../../containers/CovidCareContainer'), 2000));
export const ascVideoConsultPage = lazy(()=> pMinDelay(import('../../containers/VideoConsultContainer'), 2000));
export const ascLabTestPage = lazy(()=> pMinDelay(import('../../containers/LabTestConainer'), 2000));
export const ascMedicinePage = lazy(()=> pMinDelay(import('../../containers/MedicineContainer'), 2000));
export const ascAppointmentPage = lazy(()=> pMinDelay(import('../../containers/AppointmentContainer'), 2000));
export const ascLoginPage = lazy(()=> pMinDelay(import('../../common/LoginPage'), 2000));

// export const ascPageNotFound = lazy(()=> pMinDelay(import('../PageNotFound'), 1000));