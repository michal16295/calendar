import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { ViewOption, DateRange } from "./types";

const App = () => {
  const [selectedView, setSelectedView] = useState<ViewOption>("week");
  const [dateRange, setDateRange] = useState<DateRange>({
    start: new Date(),
    end: new Date(),
  });

  const handleSelectedView = (value: ViewOption) => {
    setSelectedView(value);
  };

  const handleSetDateRange = (start: Date, end: Date) => {
    setDateRange({
      start,
      end,
    });
  };
  return (
    <>
      <Header
        selected={selectedView}
        handleSelect={handleSelectedView}
        handleSetDateRange={handleSetDateRange}
        dateRange={dateRange}
      />
    </>
  );
};

export default App;
