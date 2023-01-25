import home from "./pages-data/home";
import contacts from "./pages-data/contacts";
import notFound from "./pages-data/not-found";
import service from "./pages-data/service";

const pagesConfig = {
  ...home,
  ...contacts,
  ...notFound,
  ...service,
};

export default pagesConfig;
