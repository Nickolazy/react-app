import Header from "../Header";
import ContentHelloPage from "../ContentHelloPage";

const HelloPage = () => {
  return (
    <section id="helloPage" className="w-full h-screen bg-[url('./src/assets/img/hello_page/hello_page_backgr.png')] bg-cover bg-center 
      p-5 lg:p-10">
      <Header />
      <ContentHelloPage />
    </section>
  );
};

export default HelloPage;
