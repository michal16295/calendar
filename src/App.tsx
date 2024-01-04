import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TableView from "./components/WeekDayView";
import MonthView from "./components/MonthView";
import { ViewOption, DateRange } from "./types";
import {
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
} from "date-fns";
import { DEFAULT_VIEW } from "./utils";
import CreateEventModal from "./components/Modal/CreateEvent";
import ErrorBoundry from "./components/ErrorBoundry";

const App = () => {
  const [selectedView, setSelectedView] = useState<ViewOption>(DEFAULT_VIEW);
  const [dateRange, setDateRange] = useState<DateRange>({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date()),
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [eventDateRange, setEventDateRange] = useState<DateRange | null>(null);

  const handleSelectedView = (value: ViewOption) => {
    setSelectedView(value);
    const start = dateRange.start;
    switch (value) {
      case "week":
        handleSetDateRange(startOfWeek(start), endOfWeek(start));
        break;
      case "day":
        handleSetDateRange(startOfDay(start), endOfDay(start));
        break;
      case "month":
        handleSetDateRange(startOfMonth(start), endOfMonth(start));
        break;
    }
  };

  const handleSetDateRange = (start: Date, end: Date) => {
    setDateRange({ start, end });
  };

  const View = selectedView === "month" ? MonthView : TableView;

  const handleSetEventDateRange = (range: DateRange) => {
    setEventDateRange(range);
  };

  return (
    <ErrorBoundry>
      <div style={{ maxHeight: "100vh", overflow: "hidden" }}>
        <Header
          selected={selectedView}
          handleSelect={handleSelectedView}
          handleSetDateRange={handleSetDateRange}
          dateRange={dateRange}
        />

        <View
          dateRange={dateRange}
          selected={selectedView}
          handleOpenModal={() => setIsModalOpen(true)}
          handleEventDateRange={handleSetEventDateRange}
          isModalOpen={isModalOpen}
        />

        <CreateEventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          eventDateRange={eventDateRange}
        />
      </div>
    </ErrorBoundry>
  );
};

export default App;
