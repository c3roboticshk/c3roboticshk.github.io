import React from 'react';

//a function take src of markdown file and return the content of the file
function LoadMD(src) {
    const [content, setContent] = React.useState(null);
    React.useEffect(() => {
        fetch(src)
            .then((response) => response.text())
            .then((text) => {
                setContent(text);
            });
    }, [src]);    
    return content;
}

export default LoadMD;