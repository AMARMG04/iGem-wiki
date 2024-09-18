import Navbar from "../components/Navbar";

import NewBanner from "../components/NewBanner";
import NewCalendar from "../components/NewCalendar";

function NoteBook() {
  return (
    <div className="App2 p-6 bg-customCream">
      <Navbar></Navbar>
      <NewBanner title="Note Book" />
      {/* <Calendar /> */}
      <NewCalendar />
    </div>
  );
}

export default NoteBook;