import { useState } from "react";

export function Download(){
    const [download, setDownload] = useState(false);

    function downloadPDF(){
        setDownload(!download);
    }

    return (
        <button onClick={downloadPDF}>
            DOWNLOAD
        </button>
    )
}

export default Download;