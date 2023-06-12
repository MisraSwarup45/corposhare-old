
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './companyform/LoginPage.jsx';
import Register from './companyform/register';
import Company from "./companyform/company.jsx"
import Companyform from './companyform/CompnayFrom.jsx';
import CompanyGet from './companyform/CompanyGet.jsx';
import CompanyPost from './companyform/CompanyPost.jsx';
import GetSingleCompany from './companyform/GetSingleCompany'
import GetCompanyProject from './companyform/GetCompanyProject.jsx'
import AddCompanyProject from './companyform/AddCompanyProject.jsx'
import DashBoard from "./companyform/DashBoard.jsx"
import AddEmp from "./companyform/AddEmp.jsx"
import LandingPage from './companyform/LandingPage';
import ListProjects from './companyform/ListProjects';
import AddProject from './companyform/AddProject';
import ProjectDetails from './companyform/ProjectDetails';
import ContactUs from './companyform/ContactUs.jsx';
import About from './companyform/About.jsx';
import Services from './companyform/Services';
import PrivacyPolicy from './companyform/PrivacyPolicy';
import TermsOfUse from './companyform/TermsOfUse';
import CookiesPolicy from './companyform/CookiesPolicy';
import CompanyProfile from './companyform/CompanyProfile';
import CompanyList from './companyform/CompanyList';
import EditProject from './companyform/EditProject';
import EmpList from './companyform/EmpList';
import EditProjectDetails from './companyform/EditProjectDetails';
import EditCompanyProfile from './companyform/EditCompanyProfile';
import EmpProfile from './companyform/EmpProfile';
import EditEmpProfile from './companyform/EditEmpProfile';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}> </Route>
          <Route exact path="/signup" element={<Register />}> </Route>
          <Route exact path="/login" element={<LoginPage />}> </Route>
          <Route exact path='/company-register' element={<Companyform />}> </Route>
          <Route exact path='/company-list' element={<CompanyList />}> </Route>
          <Route exact path='/company-profile' element={<CompanyProfile />}> </Route>
          <Route exact path='/company-profile/edit/:id' element={<EditCompanyProfile />}></Route>
          <Route exact path='/admin-dashBoard' element={<DashBoard />}></Route>
          <Route exact path='/list-projects' element={<ListProjects />}></Route>
          <Route exact path='/post-project' element={<AddProject />}></Route>
          <Route exact path='/admin-dashboard/project-details/:id' element={<ProjectDetails />}></Route>
          <Route exact path='/admin-dashboard/project-details/:num/edit-project/:id' element={<EditProjectDetails />}></Route>
          <Route exact path='/edit-project' element={<EditProject />}></Route>
          <Route exact path='/contact' element={<ContactUs />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/services' element={<Services />}></Route>
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />}></Route>
          <Route exact path='/terms-of-use' element={<TermsOfUse />}></Route>
          <Route exact path='/cookies-policy' element={<CookiesPolicy />}></Route>
          <Route exact path='/emp-list' element={<EmpList />}></Route>
          <Route exact path='/emp-profile/:id' element={<EmpProfile />}></Route>
          <Route exact path='/emp-profile/edit/:id' element={<EditEmpProfile />}></Route>
          <Route exact path='/company_get' element={<CompanyGet />}></Route>
          <Route exact path='/company_post' element={<CompanyPost />}></Route>
          <Route exact path='/company_single' element={<GetSingleCompany />}></Route>
          <Route exact path='/company_project' element={<GetCompanyProject />}></Route>
          <Route exact path='/company_projectadd' element={<AddCompanyProject />}></Route>
          <Route exact path='/add_emp' element={<AddEmp />}></Route>
          <Route exact path='/register' element={<Company />}> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

