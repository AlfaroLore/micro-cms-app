import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Blog from './components/pages/blog';
import Contact from './components/pages/contact';
import { PostsProvider } from './components/utils/postsContext';
import Post from './components/pages/post';
import Layout from './components/organisms/layout';

function AppContainer() {
  return (
    <div className="bg-black text-white min-h-screen w-screen">
      <PostsProvider>
        <Layout>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </PostsProvider>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  );
};

export default App;
