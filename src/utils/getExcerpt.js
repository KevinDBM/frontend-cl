const getExcerpt = (longText,numberWords = 2) => {
    return String(longText).split(' ').slice(0,numberWords).join(' ')
}

export default getExcerpt;