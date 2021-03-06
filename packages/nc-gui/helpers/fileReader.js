// Ref : https://stackoverflow.com/a/12002275

//Tested in Mozilla Firefox browser, Chrome
function ReadFileAllBrowsers(FileElement, CallBackFunction) {
  try {
    if (!FileElement.files || !FileElement.files.length) return CallBackFunction();

    const file = FileElement.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evt) {
        CallBackFunction(evt.target.result);
      }
      reader.onerror = function (evt) {
        CallBackFunction()
      }
    }
  } catch (Exception) {
    const fall_back = ieReadFile(FileElement.value);
    if (fall_back != false) {
      CallBackFunction(fall_back);
    }
  }
}

///Reading files with Internet Explorer
function ieReadFile(filename) {
  try {
    const fso = new ActiveXObject("Scripting.FileSystemObject");
    const fh = fso.OpenTextFile(filename, 1);
    const contents = fh.ReadAll();
    fh.Close();
    return contents;
  } catch (Exception) {
    return false;
  }
}


export default ReadFileAllBrowsers;
