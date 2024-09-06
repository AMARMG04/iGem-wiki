// import Calendar from "./components/Calendar";

import Banner from "../components/Banner";
import Calendar from "../components/Calendar";

function NoteBook() {
  return (
    <div className="App2 p-6 bg-customCream">
      <Banner title="Note Book" />
      {/* <Calendar /> */}
      <Calendar />
    </div>
  );
}

export default NoteBook;