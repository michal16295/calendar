import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WeekView from "./components/WeekView";
import { ViewOption, DateRange } from "./types";
import { startOfWeek, endOfWeek } from "date-fns";

const App = () => {
  const [selectedView, setSelectedView] = useState<ViewOption>("week");
  const [dateRange, setDateRange] = useState<DateRange>({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date()),
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

  const renderView = () => {
    switch (selectedView) {
      case "week":
        return <WeekView dateRange={dateRange} />;
      default:
        return <WeekView dateRange={dateRange} />;
    }
  };
  return (
    <>
      <Header
        selected={selectedView}
        handleSelect={handleSelectedView}
        handleSetDateRange={handleSetDateRange}
        dateRange={dateRange}
      />
      {renderView()}
    </>
  );
};

export default App;
