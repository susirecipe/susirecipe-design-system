import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'common/ScrollToTop';
import Sidebar from 'components/another/Sidebar/Sidebar';
import Home from 'pages/Home';
import Button from 'pages/Button';
import Input from 'pages/Input';
import Checkbox from 'pages/Checkbox';
import DecoHr from 'pages/DecoHr';
import Header from 'pages/Header';
import Hr from 'pages/Hr';
import Icon from 'pages/Icon';
import LinkButton from 'pages/LinkButton';
import Underline from 'pages/Underline';
import Subtitle from 'pages/Subtitle';
import Dropdown from 'pages/Dropdown';
import Card from 'pages/Card';
import EventInfoCard from 'pages/EventInfoCard';
import StepCard from 'pages/StepCard';
import ConsultantCard from 'pages/ConsultantCard';
import NavigationBar from 'pages/NavigationBar';
import Footer from 'pages/Footer';
import HambergTab from 'pages/HambergTab';
import Slider from 'pages/Slider';
import Banner from 'pages/Banner';
import Modal from 'pages/Modal';
import Content from 'components/another/Content/Content';

const AppRouter: React.FC = () => (
  <Router basename="/susirecipe-design-system">
    <ScrollToTop />
    <Sidebar />
    <Content>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/atoms/button">
          <Button />
        </Route>
        <Route path="/atoms/input">
          <Input />
        </Route>
        <Route path="/atoms/checkbox">
          <Checkbox />
        </Route>
        <Route path="/atoms/deco-hr">
          <DecoHr />
        </Route>
        <Route path="/atoms/header">
          <Header />
        </Route>
        <Route path="/atoms/hr">
          <Hr />
        </Route>
        <Route path="/atoms/icon">
          <Icon />
        </Route>
        <Route path="/atoms/link-button/:page">
          <LinkButton />
        </Route>
        <Route path="/atoms/link-button">
          <LinkButton />
        </Route>
        <Route path="/atoms/underline">
          <Underline />
        </Route>

        <Route path="/molecules/subtitle">
          <Subtitle />
        </Route>
        <Route path="/molecules/dropdown">
          <Dropdown />
        </Route>
        <Route path="/molecules/card">
          <Card />
        </Route>
        <Route path="/molecules/event-info-card">
          <EventInfoCard />
        </Route>
        <Route path="/molecules/step-card">
          <StepCard />
        </Route>
        <Route path="/molecules/consultant-card">
          <ConsultantCard />
        </Route>

        <Route path="/organisms/navigation-bar">
          <NavigationBar />
        </Route>
        <Route path="/organisms/footer">
          <Footer />
        </Route>
        <Route path="/organisms/hamberg-tab">
          <HambergTab />
        </Route>
        <Route path="/organisms/slider">
          <Slider />
        </Route>
        <Route path="/organisms/banner">
          <Banner />
        </Route>
        <Route path="/organisms/modal">
          <Modal />
        </Route>
      </Switch>
    </Content>
  </Router>
);

export default AppRouter;
