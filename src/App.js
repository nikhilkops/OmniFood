// import "./styles.css";
import HeroRight from "./content/img/hero.png";
import customer_Images from "./images_function/customer_images";

import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Feature_In from "./components/FeaturedIn/Feature_In";
import HowSection from "./components/How/section-how";
import Meals from "./components/Meals/Meals";
import Testinomial from "./components/testinomial/testinomial";
import Pricing from "./components/pricing/pricing";
import Features from "./components/omnifood-features/features";
import CTA from "./components/cta/cta";
import Footer from "./components/footer/footer";
import ForgetPassword from "./components/forget/otp";
import EnterOTP from "./components/forget/enterOTP";
import NewPassword from "./components/forget/newPassword";
import AuthProvider from "./components/context/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Switch>
          <Route path="/signin" exact component={Login}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route
            path="/forgetPassword"
            exact
            component={ForgetPassword}
          ></Route>
          <Route path="/enterOTP" exact component={EnterOTP}></Route>
          <Route path="/newPassword" exact component={NewPassword}></Route>
          <Route path="/" exact>
            <Header />

            <Hero />
            <Feature_In />
            <HowSection />
            <Meals />
            <Testinomial />
            <Pricing />
            <Features />
            <CTA />
            <Footer />
          </Route>
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
