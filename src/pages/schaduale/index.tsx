import React, { useEffect, useState } from "react";
import MainHeader from "../../shared/main-header";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
type Props = {};
const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};
const SchadualePage: React.FC<Props> = ({}) => {
  const [file, setFile] = useState("./tawbah.pdf");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
  }

  return (
    <>
      <MainHeader title="Schaduale" />
      <div className="pdfViewer">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
          className="pdfDoc"
        >
          <Page className="pdfPage" pageNumber={pageNumber} />
        </Document>

        {numPages && (
          <div className="pdfFooter">
            <button
              className="btn prev"
              onClick={() => setPageNumber(pageNumber - 1)}
              disabled={pageNumber > 1 ? false : true}
            >
              Previus
            </button>
            <div className="pages">
              Page {pageNumber} of {numPages}
            </div>
            <button
              className="btn next"
              onClick={() => setPageNumber(pageNumber + 1)}
              disabled={pageNumber < numPages ? false : true}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SchadualePage;
