
function dataAT() {
    const dataAT = data.getFullYear() + '-' +
        (data.getMonth() + 1) + '-' +
        data.getDate() + ' ' +
        data.getHours() + ':' +
        data.getMinutes() + ':' +
        data.getSeconds()

    return dataAT
} 