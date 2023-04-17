export const colourStyles = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: state?.isDisabled ? "#DCDCDC" : "rgba(59, 88, 168, 0.2)",
    borderRadius: "20px",
    minHeight: 49,
    border: "1px solid rgba(59, 88, 168, 0.5)",
    paddingLeft: "10px",
    color: "#3B58A8",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#8EA8DD",
    fontSize: "14px",
  }),
};

export default function masked(str, n) {
  var maskingSymbol = "*"; // could make this a parameter

  // n might be longer than string
  var lengthToMask = Math.min(str.length, n);
  var lengthToShow = Math.max(0, str.length - n);

  // build parts
  var maskedPart = "";
  if (lengthToMask > 0) {
    // repeat count must be positive
    maskedPart = maskingSymbol.repeat(lengthToMask);
  }
  var shownPart = "";
  if (lengthToShow > 0) {
    // slice count must be non zero
    shownPart = str.slice(-lengthToShow);
  }

  return maskedPart + shownPart;
}
