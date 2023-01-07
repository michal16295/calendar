import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TableView from "./components/TableView";
import { ViewOption, DateRange } from "./types";
import { startOfWeek, endOfWeek, startOfDay, endOfDay } from "date-fns";

const App = () => {
  const [selectedView, setSelectedView] = useState<ViewOption>("day");
  const [dateRange, setDateRange] = useState<DateRange>({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date()),
  });

  const handleSelectedView = (value: ViewOption) => {
    setSelectedView(value);
    switch (value) {
      case "week":
        handleSetDateRange(
          startOfWeek(dateRange.start),
          endOfWeek(dateRange.start)
        );
        break;
      case "day":
        handleSetDateRange(
          startOfDay(dateRange.start),
          endOfDay(dateRange.start)
        );
        break;
    }
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
        return <TableView dateRange={dateRange} selected={selectedView} />;
      default:
        return <TableView dateRange={dateRange} selected={selectedView} />;
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
