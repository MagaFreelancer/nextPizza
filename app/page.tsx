import { Button } from "@/components/ui/button";
import { Container, SortPopup, Title } from "@/components/shared";
import { Categories } from "@/components/shared/categories";

export default function Home() {
  return (
    <Container className="mt-10 ">
      <Title text="Все пиццы" size="lg" />
      <Categories />
      <SortPopup />

    </Container>
  );
}
