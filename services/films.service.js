function FilmsInformation(p_arr) {
    const arr = []
    const IDs = []
    let iterator = 0

    for (let i = 0; i <= p_arr.length - 1; i++) {
        const tmp = IDs.find(el => el === p_arr[i].id)

        if (IDs.length > 0 && tmp !== undefined) continue
        const currObj = p_arr[i]

        arr.push({
            id: currObj.id,
            film_name: currObj.film_name,
            release: currObj.release,
            img: currObj.img,
            genres: [],
            tags: []
        })

        currObj.priority === 1
            ? arr[iterator].genres.push(currObj.tag_name)
            : arr[iterator].tags.push(currObj.tag_name)

        for (let j = 0; j <= p_arr.length - 1; j++) {
            if (i === j) continue

            if (currObj.id === p_arr[j].id) {
                p_arr[j].priority === 1
                    ? arr[iterator].genres.push(p_arr[j].tag_name)
                    : arr[iterator].tags.push(p_arr[j].tag_name)
            }
        }

        iterator++
        IDs.push(currObj.id)
    }

    return arr
}

module.exports = {
    FilmsInformation
}
