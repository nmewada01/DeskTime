import React from "react";
import { Routes, Route } from "react-router-dom";
import MyDeskTime from "../components/MyDeskTime/MyDeskTime";
import About from "../components/About/About";
import Faq from "../components/FAQ/Faq";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Home from "../components/HomePage/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Calories from "../components/MyDeskTime/Calories Tracker/Calories";
import Project from "../components/MyDeskTime/Project/Project";
import FaqPage from "../components/FAQ/FaqPage";
import AllCategories from "../components/Blog/Pages/AllCategories";
import Management from "../components/Blog/Pages/Management";
import Trend from "../components/Blog/Pages/Trend";
import Uncategorize from "../components/Blog/Pages/Uncategorize";
import Work from "../components/Blog/Pages/Work";
import Workspace from "../components/Blog/Pages/Workspace";
import AllCategoriesPage from "../components/Blog/IdPages/AllCategoriesPage";
import ManagementPage from "../components/Blog/IdPages/ManagementPage";
import TrendPage from "../components/Blog/IdPages/TrendPage";
import UncategorizePage from "../components/Blog/IdPages/UncategorizePage";
import WorkPage from "../components/Blog/IdPages/WorkPage";
import WorkspacePage from "../components/Blog/IdPages/WorkspacePage";
import WebTimer from "../components/MyDeskTime/Web Timer/WebTimer";

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mydesktime" element={<MyDeskTime />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mydesktime/calories" element={<Calories/>}/>
        <Route path="/mydesktime/project" element={<Project/>}/>
        <Route path="/mydesktime/webtimer" element={<WebTimer/>}/>
        <Route path="/faq/:id" element={<FaqPage/>}/>
        <Route path="blog/category" element={<AllCategories/>}/>
        <Route path="blog/management" element={<Management/>}/>
        <Route path="blog/trend" element={<Trend/>}/>
        <Route path="blog/uncategory" element={<Uncategorize/>}/>
        <Route path="blog/work" element={<Work/>}/>
        <Route path="blog/workspace" element={<Workspace/>}/>
        <Route path="blog/category/:id" element={<AllCategoriesPage/>}/>
        <Route path="blog/management/:id" element={<ManagementPage/>}/>
        <Route path="blog/trend/:id" element={<TrendPage/>}/>
        <Route path="blog/uncategory/:id" element={<UncategorizePage/>}/>
        <Route path="blog/work/:id" element={<WorkPage/>}/>
        <Route path="blog/workspace/:id" element={<WorkspacePage/>}/>
      </Routes>
    </>
  );
};

export default AllRoute;
