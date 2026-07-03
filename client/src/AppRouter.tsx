import Home from "@/pages/Home";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";

function SectionPage({ section }: { section: string }) {
  return <Home section={section} />;
}

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/solutions">{() => <SectionPage section="solutions" />}</Route>
      <Route path="/architecture">{() => <SectionPage section="architecture" />}</Route>
      <Route path="/expertise">{() => <SectionPage section="expertise" />}</Route>
      <Route path="/about">{() => <SectionPage section="about" />}</Route>
      <Route path="/insights/:slug" component={BlogPost} />
      <Route path="/insights">{() => <SectionPage section="insights" />}</Route>
      <Route path="/contact">{() => <SectionPage section="contact" />}</Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}
