function changeDetector(prevData: number, newData: number) {
  let changeStatus: string;
  if (newData > prevData) {
    changeStatus = "Increase";
  } else if (newData < prevData) {
    changeStatus = "Decrease";
  } else {
    changeStatus = "Same";
  }

  return changeStatus;
}

export default changeDetector;
