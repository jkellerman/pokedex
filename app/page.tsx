import Content from "./components/ui/Content/Content";
import Search from "./components/ui/Search/Search";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col max-w-4xl items-center justify-center mx-auto w-11/12 lg:w-full">
        <Search />
        <div className="sm:max-w-screen-sm sm:text-left sm:self-start">
          <Content>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            deleniti, exercitationem ex eligendi sit natus quos !
          </Content>
        </div>
      </div>
    </main>
  );
}
