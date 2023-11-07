import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import About from "./pages/About";
import News, { loader as newsLoader } from "./pages/News";
import Pricing, { loader as ppLoader } from "./pages/Pricing";
import Login, { action as loginAction } from "./pages/Login";
import SignUp, { action as registration } from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import AppLayout from "./pages/AppLayout";
import Financials from "./components/features/financials/financials";
import GridderFS from "./components/features/financials/financialsItems/GridderFS";
import General from "./components/features/general/general";
import GeneralMain from "./components/features/general/generalInfo/GeneralMain";
import CompanyHL from "./components/features/general/CompanyHL";
import StockChart from "./components/features/general/StockChart";
import ReturnOverview from "./components/features/general/ReturnOverview";
import Statistics from "./components/features/statistics/statistics";
import PriceVolume from "./components/features/statistics/PriceVolume";
import Valuation from "./components/features/statistics/Valuation";
import FinancialStatements from "./components/features/statistics/FinancialStatements";
import Dividends from "./components/features/statistics/Dividends";
import Ratios from "./components/features/statistics/Ratios";
import Analysis from "./components/features/analysis/Analysis";
import Forecasts from "./components/features/analysis/Forecasts";
import AnalystRatings from "./components/features/analysis/AnalystRatings";
import Recommendations from "./components/features/analysis/Recommendations";
import PriceTarget from "./components/features/analysis/PriceTarget";
import AppNews from "./components/features/news/AppNews";
import NewsContainer, {
  loader as cnLoader,
} from "./components/features/news/NewsContainer";
import Shareholders from "./components/features/shareholders/Shareholders";
import ShareholdersContent, {
  loader as shLoader,
} from "./components/features/shareholders/ShareholdersContent";
import Insiders from "./components/features/insiders/Insiders";
import Executives from "./components/features/insiders/Executives";
import Transactions from "./components/features/insiders/Transactions";
import OptionChain from "./components/features/options/OptionChain";
import OptionType, {
  loader as optLoader,
} from "./components/features/options/OptionType";
import Technicals from "./components/features/technicals/Technicals";
import TechnicalsContent from "./components/features/technicals/TechnicalsContent";
import Ideas from "./components/features/ideas/Ideas";
import IdeasContent from "./components/features/ideas/IdeasContent";
import IdeaForm from "./components/features/ideas/items/IdeaForm";
import IdeaArticle from "./components/features/ideas/items/ideaWindow/IdeaArticle";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "about", element: <About /> },
  { path: "pricing", element: <Pricing />, loader: ppLoader },
  { path: "contact", element: <Contact /> },
  { path: "news", element: <News />, loader: newsLoader },
  { path: "login", element: <Login />, action: loginAction },
  { path: "signup", element: <SignUp />, action: registration },
  {
    path: "app",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="general" /> },
      { path: "financials", element: <Financials /> },
      { path: "financials/:financialsKey", element: <GridderFS /> },
      { path: "options", element: <OptionChain /> },
      { path: "options/:optKey", element: <OptionType />, loader: optLoader },
      { path: "news", element: <AppNews /> },
      { path: "news/:newsKey", element: <NewsContainer />, loader: cnLoader },
      { path: "ideas", element: <Ideas /> },
      { path: "ideas/newIdea", element: <IdeaForm /> },
      {
        path: "ideas/:ideasKey",
        element: <IdeasContent />,
        children: [
          { path: "article", element: <IdeaArticle /> },
          { path: "newIdea", element: <IdeaForm /> },
        ],
      },
      { path: "shareholders", element: <Shareholders /> },
      { path: "technicals", element: <Technicals /> },
      { path: "technicals/:techKey", element: <TechnicalsContent /> },
      {
        path: "shareholders/:shKey",
        element: <ShareholdersContent />,
        loader: shLoader,
      },
      {
        path: "general",
        element: <General />,
        children: [
          { index: true, element: <Navigate replace to="stock_chart" /> },
          { path: "general_information", element: <GeneralMain /> },
          { path: "company_highlights", element: <CompanyHL /> },
          { path: "stock_chart", element: <StockChart /> },
          { path: "return_overview", element: <ReturnOverview /> },
        ],
      },
      {
        path: "statistics",
        element: <Statistics />,
        children: [
          { index: true, element: <Navigate replace to="price_and_volume" /> },
          { path: "price_and_volume", element: <PriceVolume /> },
          { path: "valuation", element: <Valuation /> },
          { path: "financial_statements", element: <FinancialStatements /> },
          { path: "dividends", element: <Dividends /> },
          { path: "financial_ratios", element: <Ratios /> },
        ],
      },
      {
        path: "analysis",
        element: <Analysis />,
        children: [
          { index: true, element: <Navigate replace to="forecasts" /> },
          { path: "forecasts", element: <Forecasts /> },
          { path: "analyst_ratings", element: <AnalystRatings /> },
          { path: "recommendations", element: <Recommendations /> },
          { path: "price_target", element: <PriceTarget /> },
        ],
      },
      {
        path: "insiders",
        element: <Insiders />,
        children: [
          { index: true, element: <Navigate replace to="key_executives" /> },
          { path: "key_executives", element: <Executives /> },
          {
            path: "transactions",
            element: <Transactions />,
          },
        ],
      },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
