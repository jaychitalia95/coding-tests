const breakCamelCase = (word) => {
    const regex = /([a-z])([A-Z])/g;
    const spaces = word.replace(regex, '$1 $2');
    console.log(spaces)
}

breakCamelCase('jayChitalia')