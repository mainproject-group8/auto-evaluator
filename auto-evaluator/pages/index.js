import Head from "next/head";
import { useState, useRef } from "react";

export default function Home() {
  // drag state
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef = useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };
  return (
    <>
      <Head>
        <title>51 Letters</title>
      </Head>
      <div className="m-8 w-1/3">
        <b>Guide:</b>
        <ol className="ml-6">
          <li>Download the following template.</li>
          <li>
            Take the print out of the answer template. It is in this template
            the students are supposed to write the answers.
          </li>
          <li>
            Enter the words for spelling test under “Answers” heading and press
            “Submit”.
          </li>
          <li>Scan the answer sheet(s).</li>
          <li>Upload the scanned answer sheet(s).</li>
          <li>
            Press “Evaluate” and download the generated .xls file which contains
            the individual score for each question and also total score for each
            scanned paper.
          </li>
        </ol>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">
          Download Answer Template
        </button>

        <div className="mt-8">
          <h2>Upload</h2>
          <form id="form-file-upload">
            <input type="file" id="input-file-upload" multiple={true} />
            <label id="label-file-upload" htmlFor="input-file-upload">
              <div>
                <p>Drag and drop your file here or</p>
                <button className="upload-button">Upload a file</button>
              </div>
            </label>
            {dragActive && (
              <div
                id="drag-file-element"
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              ></div>
            )}
          </form>
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-4">
          Evaluate Answer Sheets
        </button>
      </div>
      <div className="w-full text-center">
        <hr className="h-6" />
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded my-4">
          Download Result
        </button>
      </div>
    </>
  );
}
