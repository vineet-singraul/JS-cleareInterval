let start = () => {
    let counter = 0;
    let repetation = setInterval(() => {
        // console.log("Hello");
        counter++;
        console.log(counter);

    }, 2000)



    setTimeout(() => {
        clearInterval(repetation)
    }, 6000)
}