import Vue from "vue";
import VueTailwind from "vue-tailwind";

import {
  TInput,
  TTextarea,
  TSelect,
  TRadio,
  TCheckbox,
  TButton,
  TInputGroup,
  TCard,
  TAlert,
  TModal,
  TDropdown,
  TRichSelect,
  TPagination,
  TTag,
  TRadioGroup,
  TCheckboxGroup,
  TTable,
  TDatepicker,
  TToggle,
  TDialog,
} from "vue-tailwind/dist/components";

const settings = {
  // Use the following syntax
  // {component-name}: {
  //   component: {importedComponentObject},
  //   props: {
  //     {propToOverride}: {newDefaultValue}
  //     {propToOverride2}: {newDefaultValue2}
  //   }
  // }
  "t-input": {
    component: TInput,
    props: {
      fixedClasses:
        "block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      classes:
        "text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ",
      variants: {
        danger: "border-red-300 bg-red-50 placeholder-red-200 text-red-900",
        success:
          "border-green-300 bg-green-50 placeholder-gray-400 text-green-900",
      },
    },
  },
  "t-modal": {
    component: TModal,
    props: {
      fixedClasses: {
        overlay:
          "z-90 overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50",
        wrapper: "relative mx-auto z-90 max-w-lg px-3 py-12",
        modal: "overflow-visible relative  rounded",
        body: "p-3",
        header: "border-b p-3 rounded-t",
        footer: " p-3 rounded-b",
        close:
          "flex items-center justify-center rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
      },
      classes: {
        overlay: "bg-black",
        wrapper: "",
        modal: "bg-white shadow",
        body: "p-3",
        header: "border-gray-100",
        footer: "bg-gray-100",
        close: "bg-gray-100 text-gray-600 hover:bg-gray-200",
        closeIcon: "fill-current h-4 w-4",
        overlayEnterClass: "opacity-0",
        overlayEnterActiveClass: "transition ease-out duration-100",
        overlayEnterToClass: "opacity-100",
        overlayLeaveClass: "opacity-100",
        overlayLeaveActiveClass: "transition ease-in duration-75",
        overlayLeaveToClass: "opacity-0",
        enterClass: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveClass: "",
        leaveActiveClass: "",
        leaveToClass: "",
      },
      variants: {
        danger: {
          overlay: "bg-red-100",
          header: "border-red-50 text-red-700",
          close:
            "bg-red-50 text-red-700 hover:bg-red-200 border-red-100 border",
          modal: "bg-white border border-red-100 shadow-lg",
          footer: "bg-red-50",
        },
      },
    },
  },
  "t-button": {
    component: TButton,
    props: {
      fixedClasses:
        "block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      classes:
        "text-white bg-blue-500 border border-transparent shadow-sm rounded hover:bg-blue-600",
      variants: {
        secondary:
          "text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600",
        error:
          "text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600",
        success:
          "text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600",
        link: "text-blue-500 underline hover:text-blue-600",
      },
    },
  },
  "t-select": {
    component: TSelect,
    props: {
      fixedClasses:
        "block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      classes:
        "text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ",
      variants: {
        danger: "border-red-300 bg-red-50 placeholder-red-200 text-red-900",
        success:
          "border-green-300 bg-green-50 placeholder-gray-400 text-green-900",
      },
    },
  },
  "t-alert": {
    component: TAlert,
    props: {
      fixedClasses: {
        wrapper:
          "fixed mt-10 text-center inset-x-0 top-0 flex items-center w-2/4 p-4 border-l-4  rounded shadow-sm z-100 justify-center inset-x-0 md:w-2/5 mx-auto",
        body: "flex-grow",
        close:
          "relative flex items-center justify-center ml-4 flex-shrink-0 w-6 h-6 transition duration-100 ease-in-out rounded  focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        closeIcon: "fill-current h-4 w-4",
      },
      classes: {
        wrapper: "bg-blue-50 border-blue-500",
        body: "text-blue-700",
        close: "text-blue-500 hover:bg-blue-200",
      },
      variants: {
        danger: {
          wrapper: "bg-red-50 border-red-500",
          body: "text-red-700",
          close: "text-red-500 hover:bg-red-200",
        },
        success: {
          wrapper: "bg-green-50 border-green-500",
          body: "text-green-700",
          close: "text-green-500 hover:bg-green-200",
        },
      },
    },
  },
  "t-table": {
    component: TTable,
    props: {
      classes: {
        table:
          "min-w-full divide-y divide-gray-100 shadow-sm border-gray-200 border",
        thead: "",
        theadTr: "",
        theadTh: "px-3 py-2 font-semibold text-left bg-gray-100 border-b",
        tbody: "bg-white divide-y divide-gray-100",
        tr: "",
        td: "px-3 py-2 whitespace-no-wrap",
        tfoot: "",
        tfootTr: "",
        tfootTd: "",
      },
      variants: {
        thin: {
          td: "p-1 whitespace-no-wrap text-sm",
          theadTh: "px-3 py-2 font-semibold text-left bg-gray-100 border-b",
        },
        default: {
          table: "min-w-full divide-y divide-gray-100 shadow-sm border-none",
          theadTh:
            "sticky top-0 prose-sm px-3 py-2 font-bold uppercase text-left bg-myBg border-b",
          tbody: "bg-white divide-y divide-gray-100",
          td: "text-sm px-3 py-2 whitespace-no-wrap",
        },
      },
    },
  },
  "t-pagination": {
    component: TPagination,
    props: {
      classes: {
        wrapper: "table border-collapse text-center bg-white mx-auto shadow-sm",
        element:
          "w-8 h-8 border border-gray-200 table-cell hover:border-blue-100",
        activeElement:
          "w-8 h-8 border border-gray-200 border-blue-500 table-cell hover:border-blue-600",
        disabledElement: "w-8 h-8 border border-gray-200 table-cell",
        ellipsisElement: "w-8 h-8 border border-gray-200 hidden md:table-cell",
        activeButton:
          "bg-blue-500 w-full h-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        disabledButton:
          "opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out",
        button:
          "hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        ellipsis: "",
      },
      variants: {
        rounded: {
          wrapper: "bg-white mx-auto text-center flex space-x-2",
          element: "w-8 h-8 rounded-full",
          activeElement: "w-8 h-8 rounded-full",
          disabledElement: "w-8 h-8 rounded-full",
          ellipsisElement: "w-8 h-8 rounded-full hidden md:inline",
          activeButton:
            "border border-blue-500 bg-blue-500 w-full h-full rounded-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
          disabledButton:
            "border border-gray-200  opacity-25 w-full h-full rounded-full cursor-not-allowed transition duration-100 ease-in-out",
          button:
            "border border-gray-200 hover:bg-blue-100 hover:border-blue-100 rounded-full w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
          ellipsis: "",
        },
      },
    },
  },
  "t-datepicker": {
    component: TDatepicker,
    props: {
      fixedClasses: {
        navigator: "flex",
        navigatorViewButton: "flex items-center",
        navigatorViewButtonIcon: "flex-shrink-0 h-5 w-5",
        navigatorViewButtonBackIcon: "flex-shrink-0 h-5 w-5",
        navigatorLabel: "flex items-center py-1",
        navigatorPrevButtonIcon: "h-6 w-6 inline-flex",
        navigatorNextButtonIcon: "h-6 w-6 inline-flex",
        inputWrapper: "relative",
        viewGroup: "inline-flex flex-wrap",
        view: "w-64",
        calendarDaysWrapper: "grid grid-cols-7",
        calendarHeaderWrapper: "grid grid-cols-7",
        monthWrapper: "grid grid-cols-4",
        yearWrapper: "grid grid-cols-4",
        input:
          "block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
        clearButton:
          "flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6",
        clearButtonIcon: "fill-current h-3 w-3",
      },
      classes: {
        wrapper: "flex flex-col",
        dropdownWrapper: "relative z-10",
        dropdown:
          "origin-top-left absolute rounded shadow bg-white overflow-hidden mt-1",
        enterClass: "opacity-0 scale-95",
        enterActiveClass: "transition transform ease-out duration-100",
        enterToClass: "opacity-100 scale-100",
        leaveClass: "opacity-100 scale-100",
        leaveActiveClass: "transition transform ease-in duration-75",
        leaveToClass: "opacity-0 scale-95",
        inlineWrapper: "",
        inlineViews: "rounded bg-white border mt-1 inline-flex",
        inputWrapper: "",
        input: "text-black placeholder-gray-400 border-gray-300",
        clearButton:
          "hover:bg-gray-100 rounded transition duration-100 ease-in-out text-gray-600",
        clearButtonIcon: "",
        viewGroup: "",
        view: "",
        navigator: "pt-2 px-3",
        navigatorViewButton:
          "transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-100",
        navigatorViewButtonIcon: "fill-current text-gray-400",
        navigatorViewButtonBackIcon: "fill-current text-gray-400",
        navigatorViewButtonMonth: "text-gray-700 font-semibold",
        navigatorViewButtonYear: "text-gray-500 ml-1",
        navigatorViewButtonYearRange: "text-gray-500 ml-1",
        navigatorLabel: "py-1",
        navigatorLabelMonth: "text-gray-700 font-semibold",
        navigatorLabelYear: "text-gray-500 ml-1",
        navigatorPrevButton:
          "transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 ml-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed",
        navigatorNextButton:
          "transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 -mr-1 disabled:opacity-50 disabled:cursor-not-allowed",
        navigatorPrevButtonIcon: "text-gray-400",
        navigatorNextButtonIcon: "text-gray-400",
        calendarWrapper: "px-3 pt-2",
        calendarHeaderWrapper: "",
        calendarHeaderWeekDay:
          "uppercase text-xs text-gray-500 w-8 h-8 flex items-center justify-center",
        calendarDaysWrapper: "",
        calendarDaysDayWrapper: "w-full h-8 flex flex-shrink-0 items-center",
        otherMonthDay:
          "text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed",
        emptyDay: "",
        inRangeFirstDay:
          "text-sm bg-blue-500 text-white w-full h-8 rounded-l-full",
        inRangeLastDay:
          "text-sm bg-blue-500 text-white w-full h-8 rounded-r-full",
        inRangeDay:
          "text-sm bg-blue-200 w-full h-8 disabled:opacity-50 disabled:cursor-not-allowed",
        selectedDay:
          "text-sm rounded-full w-8 h-8 mx-auto bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed",
        activeDay:
          "text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed",
        highlightedDay:
          "text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed",
        day: "text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed",
        today:
          "text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500",
        monthWrapper: "px-3 pt-2",
        selectedMonth:
          "text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white",
        activeMonth: "text-sm rounded w-full h-12 mx-auto bg-blue-100",
        month: "text-sm rounded w-full h-12 mx-auto hover:bg-blue-100",
        yearWrapper: "px-3 pt-2",
        year: "text-sm rounded w-full h-12 mx-auto hover:bg-blue-100",
        selectedYear:
          "text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white",
        activeYear: "text-sm rounded w-full h-12 mx-auto bg-blue-100",
      },
      variants: {
        danger: {
          input: "border-red-300 bg-red-50 placeholder-red-200 text-red-900",
          clearButton: "hover:bg-red-200 text-red-500",
        },
      },
    },
  },
  "t-input-group": {
    component: TInputGroup,
    props: {
      fixedClasses: {
        wrapper: "form-input",
        label: "block",
        body: "",
        feedback: " text-sm text-sm",
        description: "text-gray-400 text-sm",
      },
      classes: {
        wrapper: "form-input",
        label: "",
        body: "",
        feedback: "text-gray-400",
        description: "text-gray-400",
      },
      variants: {
        danger: {
          label: "text-red-500",
          feedback: "text-red-500",
        },
        success: {
          label: "text-green-500",
          feedback: "text-green-500",
        },
      },
    },
  },
  "t-checkbox": {
    component: TCheckbox,
    props: {
      fixedClasses:
        "transition duration-100 ease-in-out rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed",
      classes: "text-blue-500 border-gray-300 ",
      variants: {
        error: "text-red-500 border-red-300",
        success: "text-green-500 border-green-300",
      },
    },
  },
  "t-radio": {
    component: TRadio,
    props: {
      fixedClasses:
        "transition duration-100 ease-in-out shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0  disabled:opacity-50 disabled:cursor-not-allowed",
      classes: "text-blue-500 border-gray-300",
      variants: {
        error: "text-red-500 border-red-300",
        success: "text-green-500 border-green-300",
      },
    },
  },
  "t-textarea": {
    component: TTextarea,
    props: {
      fixedClasses:
        "block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      classes:
        "text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ",
      variants: {
        danger: "border-red-300 bg-red-50 placeholder-red-200 text-red-900",
        success:
          "border-green-300 bg-green-50 placeholder-gray-400 text-green-900",
      },
    },
  },
  "t-dropdown": {
    component: TDropdown,
    props: {
      fixedClasses: {
        button:
          "flex items-center text-white block px-4 py-2 transition duration-100 ease-in-out border border-transparent rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
        wrapper: "inline-flex flex-col",
        dropdownWrapper: "relative z-10",
        dropdown: "origin-top-left absolute left-0 w-56 rounded shadow mt-1",
        enterClass: "opacity-0 scale-95",
        enterActiveClass: "transition transform ease-out duration-100",
        enterToClass: "opacity-100 scale-100",
        leaveClass: "opacity-100 scale-100",
        leaveActiveClass: "transition transform ease-in duration-75",
        leaveToClass: "opacity-0 scale-95",
      },
      classes: {
        button: "bg-blue-500 hover:bg-blue-600",
        dropdown: "bg-white",
      },
      variants: {
        danger: {
          button: "bg-red-500 hover:bg-red-600",
          dropdown: "bg-red-50",
        },
        tooltip: {
          dropdown: "bg-white opacity-100 p-4",
        },
      },
    },
  },
  "t-card": {
    component: TCard,
    props: {
      fixedClasses: {
        wrapper: "border rounded shadow-sm",
        body: "p-3",
        header: "border-b p-3 rounded-t font-semibold",
        footer: "border-t p-3 rounded-b",
      },
      classes: {
        wrapper: "bg-white border-gray-100",
        body: "",
        header: "border-gray-100",
        footer: "border-gray-100",
      },
      variants: {
        danger: {
          wrapper: "bg-red-50 text-red-700 border-red-200",
          header: "border-red-200 text-red-700",
          footer: "border-red-200 text-red-700",
        },
      },
    },
  },
  // ...Rest of the components
};
Vue.use(VueTailwind, settings);
