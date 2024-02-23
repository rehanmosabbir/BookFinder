import BookFinderHeader from "./BookFinderHeader";
import BookGrid from "./BookGrid";

export default function BookFinderMain() {
  return (
    <main className="my-10 lg:my-14">
      <BookFinderHeader />
      <BookGrid />
    </main>
  );
}
