const Download = () => {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('my-cv.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'my-cv.pdf';
                alink.click();
            })
        })
    }
    return<>
    {/* <a href="my-cv.pdf" download>click</a> */}
        <button className="download-btn" onClick={onButtonClick}>
            Download CV
        </button>
        </>

};
  
export default Download;