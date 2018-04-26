import Sugar from 'sugar'

export const toDate = (val: any) => {
    return Sugar.Date.create(val)
}
export const onlyToDate = (val: any) => {
    return Sugar.Date.format(toDate(val), '{yyyy}-{MM}-{dd}')
}
export const onlyTime = (val: any) => {
    return Sugar.Date.format(toDate(val), '{hh}:{mm}')
}
export const numCommas = (x: any) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export const BadgeCOP = (x: any) => {
    return `COP ${numCommas(x)}`
}