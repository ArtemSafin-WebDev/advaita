import home from "./pages-data/home";
import contacts from "./pages-data/contacts";
import notFound from "./pages-data/not-found";

const pagesConfig = {
  ...home,
  ...contacts,
  ...notFound,
};

export default pagesConfig;
