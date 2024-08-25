import { Button } from "@/components/ui/button";
import { Container, Filters, SortPopup, Title, TopBar } from "@/components/shared";
import { Categories } from "@/components/shared/categories";

export default function Home() {
  return (
    <>
      <Container className="mt-10 ">
        <Title text="Все пиццы" size="lg" />
      </Container>
      <TopBar />
      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
        </div>
      </Container>
    </>
  );
}
