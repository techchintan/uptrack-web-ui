//#Global Imports
import React from "react";
import clsx from "clsx";
//#end Global Imports

//#Local Imports
import { IDatePicker } from "./DatePicker";
//#end Local Imports

export const DatePicker: React.FC<IDatePicker.DatePickerProps> = ({
  id,
  bgDatePicker,
  datepickerClassname,
  selectedDate,
  dateChangeHandler,
  disabled = false,
  maxDate,
  calendarIcon,
}) => {
  return (
    <div className="relative">
      <input
        className={clsx(
          "text-xs lg:text-base p-[3px]",
          bgDatePicker,
          datepickerClassname,
          "font-sans w-200px border border-gray-150 border-opacity-30 rounded-sm",
        )}
        type="date"
        id={id}
        value={selectedDate}
        onChange={(event) => dateChangeHandler(event.target.value)}
        disabled={disabled}
        max={maxDate}
      />
      {calendarIcon && <div className="absolute ml-[1px] pl-4 top-2 lg:top-3">{calendarIcon}</div>}
    </div>
  );
};
