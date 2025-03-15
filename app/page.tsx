import Content from "@/components/HomeContent";
import Header from "@/components/Header";
import PaginationFooter from "@/components/PaginationFooter";
import Title from "@/components/Title";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Title />
      <Content/>
      <PaginationFooter/>
    </div>
  );
}
